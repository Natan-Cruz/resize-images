const NodeCache = require('node-cache');
const { formatBytes } = require('./Utils');
const cache = new NodeCache();

const sizeInBytesLimit = 1024 * 1024 * 10 // 10 MB

// Escopo para definir limite de cache
// cache.on("set", function() {
// })

module.exports = {
    cache
}