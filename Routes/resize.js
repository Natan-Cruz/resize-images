const { Router } = require("express")
const { toInt } = require('../Utils');
const sharp = require("sharp");
const { cache } = require('../Cache');

const router = Router()

router.get("/:filename", (req, res) => {
    const { filename } = req.params;
    if (!filename)
        res.status(404).send();

    const { originalUrl } = req
    const imgCache = cache.has(originalUrl)
    if (imgCache) {
        const image = cache.get(originalUrl)
        return res.send(image)
    }

    const { width: paramWidth, height: paramHeight, quality: paramQuality } = req.query
    const config = {
        width: toInt(paramWidth) || null,
        height: toInt(paramHeight) || null,
        quality: 90
    }
    if (toInt(paramQuality) > 0 && toInt(paramQuality) <= 100) {
        config.quality = toInt(paramQuality)
    }

    sharp(process.cwd() + "/images/" + filename)
        .resize(config.width, config.height)
        .jpeg({ progressive: true, force: false, quality: config.quality })
        .png({ progressive: true, force: false, compressionLevel: Math.trunc(config.quality / 10) })
        .webp({ progressive: true, force: false, quality: config.quality })
        .toBuffer()
        .then(data => {
            cache.set(originalUrl, data)
            res.send(data)
        })
        .catch(err => console.log(err))

})

module.exports = app => app.use("/images", router)