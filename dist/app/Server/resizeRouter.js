"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const resizeController_1 = require("./resizeController");
const router = express_1.Router();
exports.router = router;
router.get("/:filename", resizeController_1.serverImages);
