const { Router } = require("express");
const { formatBytes } = require("../Utils");
const { cache } = require("../Cache");

const router = Router();

router.get("/", (req, res) => {
    const { vsize } = cache.getStats()
    res.render('index.ejs', {
        PORT: 3000,
        cacheSize: formatBytes(vsize)
    })
})

module.exports = app => app.use('/', router)