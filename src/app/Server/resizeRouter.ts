import { Router } from "express"
import { serverImages } from "./resizeController";

const router = Router();

router.get("/:filename", serverImages)

export {
    router
}