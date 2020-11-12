// https://gist.github.com/trevershick/737205b0ba79d8877a43
function formatBytes(bytes: number) :string {
    if(bytes === 0) return "0 bytes";
    const precision = 2;
    var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
        number = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];
}

export {
    formatBytes
}