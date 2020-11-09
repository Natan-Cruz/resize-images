const { Router } = require("express")
const { cache } = require('../Cache');
const { formatBytes } = require('../Utils');

const router = Router();

router.get('/', async(req, res) => {
    const { vsize } = cache.getStats()
    res.send(`<h1>Memoria usada palo cache: ${ formatBytes(vsize) }<h1>`)
})

module.exports = app => app.use('/stats', router)