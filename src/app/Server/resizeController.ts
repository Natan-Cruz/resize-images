import { Request, Response } from "express";

import {
    hasCache,
    getFromCache,
    setCache,
    getFromDisk,
    getFromSharp
} from "./resizeWorker";

async function serverImages(req: Request, res: Response):Promise<any> {
    try {
        const { filename } = req.params,
            { originalUrl } = req,
            { width, height, quality } = req.query;

        if (!filename)
            res.status(404).send();

        // Verifica se a imagem requisitada está no cache
        if(hasCache(originalUrl)){
            const image = getFromCache(originalUrl);
            return res.send(image);
        } 
        // Se não há "width" e "heigth" não há motivos para redimensionar
        if(!width && !width && !quality){
            const image = await getFromDisk(filename)
            return res.send(image);
        }
        
        // Trata imagem com sharp
        const image = await getFromSharp(filename, {
            width: toInt(width),
            height: toInt(height),
            quality: toInt(quality, 90)
        })
        // Salva no cache
        setCache(originalUrl, image);
        // Envia para o navegador
        return res.send(image);
    } catch (error) {
        console.log(error)    
        res.sendStatus(400)
    }
}

function toInt( value?: any, defaultValue?: number) :any {
    if(!value) return defaultValue || null;
    if(typeof value === "string")
        return !isNaN(parseInt(value)) && parseInt(value) 
    else
        return defaultValue || null
}

export {
    serverImages
}
