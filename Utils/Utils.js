function toInt(value) {
    if (!value) return null;
    if (typeof value !== "string" && typeof value !== 'number') return null;
    return parseInt(value);
}

// https://gist.github.com/trevershick/737205b0ba79d8877a43
function formatBytes(bytes) {
    if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
    const precision = 2;
    var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
        number = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];
}

module.exports = {
    toInt,
    formatBytes
}