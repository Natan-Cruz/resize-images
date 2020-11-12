"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheLimitInBytes = exports.cache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const cache = new node_cache_1.default(), cacheLimitInBytes = 1024 * 1024 * 2, // 10 MB
entityLimitInBytes = 1024 * 1024; //1 MB
exports.cache = cache;
exports.cacheLimitInBytes = cacheLimitInBytes;
