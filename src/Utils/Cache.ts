import NodeCache from 'node-cache';
import { formatBytes } from './Utils';

const cache = new NodeCache(),
    cacheLimitInBytes = 1024 * 1024 * 2, // 10 MB
    entityLimitInBytes = 1024 * 1024 //1 MB

// Escopo para definir limite de cache
// cache.on("set", function(key, value) {
    
// })

export {
    cache,
    cacheLimitInBytes
}