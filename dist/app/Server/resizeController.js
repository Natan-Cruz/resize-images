"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverImages = void 0;
const resizeWorker_1 = require("./resizeWorker");
function serverImages(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { filename } = req.params, { originalUrl } = req, { width, height, quality } = req.query;
            if (!filename)
                res.status(404).send();
            // Verifica se a imagem requisitada está no cache
            if (resizeWorker_1.hasCache(originalUrl)) {
                const image = resizeWorker_1.getFromCache(originalUrl);
                return res.send(image);
            }
            // Se não há "width" e "heigth" não há motivos para redimensionar
            if (!width && !width && !quality) {
                const image = yield resizeWorker_1.getFromDisk(filename);
                return res.send(image);
            }
            // Trata imagem com sharp
            const image = yield resizeWorker_1.getFromSharp(filename, {
                width: toInt(width),
                height: toInt(height),
                quality: toInt(quality, 90)
            });
            // Salva no cache
            resizeWorker_1.setCache(originalUrl, image);
            // Envia para o navegador
            return res.send(image);
        }
        catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    });
}
exports.serverImages = serverImages;
function toInt(value, defaultValue) {
    if (!value)
        return defaultValue || null;
    if (typeof value === "string")
        return !isNaN(parseInt(value)) && parseInt(value);
    else
        return defaultValue || null;
}
