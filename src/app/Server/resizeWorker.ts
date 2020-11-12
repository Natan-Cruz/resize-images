import sharp from "sharp";
import fs from "fs";
import path from "path";
import { cache } from '../../Utils/Cache';

function getFromCache(originalUrl: string){
    return cache.get(originalUrl)
}
function hasCache(originalUrl: string):Boolean{
    return cache.has(originalUrl)
}
function setCache(originalUrl:string, image:Buffer):void{
    cache.set(originalUrl, image)
}

function getFromDisk(filename: string):Promise<Buffer>{
    return new Promise(( resolve, reject ) => {
        const path = getPath(filename)
        fs.readFile(path, (err, data) => {
            if(err) reject(err);
            resolve(data)
        })
    })
}

interface IInputSharp{
    width?: number,
    height?: number,
    quality: number
}

function getFromSharp(filename:string, presets: IInputSharp):Promise<Buffer>{
    return new Promise((resolve, reject) => {   
        const { width, height, quality } = presets,
            path = getPath(filename)
        
        if (quality < 0 || quality > 100) 
            reject(new Error("Paramêtro qualidade fora do esperado"));

        sharp(path)
            .resize(width, height)
            .jpeg({ progressive: true, force: false, quality: quality })
            .png({ progressive: true, force: false, compressionLevel: Math.trunc(quality / 10) })
            .webp({ force: false, quality: quality })
            .toBuffer()
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

function getPath(filename:string): string{
    return path.resolve(process.cwd() + "/statics/images/" + filename);
}

export{
    hasCache,
    getFromCache,
    setCache,
    getFromDisk,
    getFromSharp
}