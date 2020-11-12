"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const Utils_1 = require("../../Utils/Utils");
const Cache_1 = require("../../Utils/Cache");
const router = express_1.Router();
exports.router = router;
router.get("/", (req, res) => {
    const { vsize } = Cache_1.cache.getStats();
    res.render('index.ejs', {
        PORT: 3000,
        cacheSize: Utils_1.formatBytes(vsize),
        cacheLimit: Utils_1.formatBytes(Cache_1.cacheLimitInBytes)
    });
});
