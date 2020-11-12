import { Router, Request, Response } from "express";
import { formatBytes } from "../../Utils/Utils";
import { cache, cacheLimitInBytes } from "../../Utils/Cache";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    const { vsize } = cache.getStats()

    res.render('index.ejs', {
        PORT: 3000,
        cacheSize: formatBytes(vsize),
        cacheLimit: formatBytes(cacheLimitInBytes)
    })
})

export { router }