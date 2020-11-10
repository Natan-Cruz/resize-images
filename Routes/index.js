const { Router } = require("express");
const { formatBytes } = require("../Utils/Utils");
const { cache } = require("../Utils/Cache");

const router = Router();

router.get("/", (req, res) => {
    const { vsize } = cache.getStats()
    res.render('index.ejs', {
        PORT: 3000,
        cacheSize: formatBytes(vsize)
    })
})

module.exports = app => app.use('/', router)