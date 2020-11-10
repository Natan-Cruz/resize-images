const { Router } = require("express")
const { toInt } = require('../Utils/Utils');
const { cache } = require('../Utils/Cache');
const sharp = require("sharp");

const router = Router();

router.get("/:filename", (req, res) => {
    const { filename } = req.params;
    if (!filename)
        res.status(404).send();

    // Verifica se a imagem requisitada está no cache
    const { originalUrl } = req;
    const imgCache = cache.has(originalUrl)
    if (imgCache) {
        const image = cache.get(originalUrl)
        return res.send(image)
    }

    // Parametros para o tratamento da image
    // ?width=xxx&height=yyy&quality=zzz (1-100)
    // Caso forneça soment o "width", a alturaserá redimensionada automaticamente pelo sharp
    // E caso forneça somente o "height", o mesmo ocorrerá
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
        .catch(err => {
            // Salvar em um log mais completo
            console.log(err)
            res.sendStatus(400);
        })

})

module.exports = app => app.use("/images", router)