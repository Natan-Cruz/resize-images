"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFromSharp = exports.getFromDisk = exports.setCache = exports.getFromCache = exports.hasCache = void 0;
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const Cache_1 = require("../../Utils/Cache");
function getFromCache(originalUrl) {
    return Cache_1.cache.get(originalUrl);
}
exports.getFromCache = getFromCache;
function hasCache(originalUrl) {
    return Cache_1.cache.has(originalUrl);
}
exports.hasCache = hasCache;
function setCache(originalUrl, image) {
    Cache_1.cache.set(originalUrl, image);
}
exports.setCache = setCache;
function getFromDisk(filename) {
    return new Promise((resolve, reject) => {
        const path = getPath(filename);
        fs_1.default.readFile(path, (err, data) => {
            if (err)
                reject(err);
            resolve(data);
        });
    });
}
exports.getFromDisk = getFromDisk;
function getFromSharp(filename, presets) {
    return new Promise((resolve, reject) => {
        const { width, height, quality } = presets, path = getPath(filename);
        if (quality < 0 || quality > 100)
            reject(new Error("Paramêtro qualidade fora do esperado"));
        sharp_1.default(path)
            .resize(width, height)
            .jpeg({ progressive: true, force: false, quality: quality })
            .png({ progressive: true, force: false, compressionLevel: Math.trunc(quality / 10) })
            .webp({ force: false, quality: quality })
            .toBuffer()
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
}
exports.getFromSharp = getFromSharp;
function getPath(filename) {
    return path_1.default.resolve(process.cwd() + "/statics/images/" + filename);
}
