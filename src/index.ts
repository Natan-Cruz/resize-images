import express from "express";
import path from "path"
import ejs from "ejs"

import { router as index } from "./app/Index/indexRouter"
import { router as serverImages } from "./app/Server/resizeRouter";

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set("views", path.resolve(process.cwd() + "/statics/templates"));

app.use('/images', serverImages)
app.use('/', index)

app.listen(3000, () => {
    console.log(`Server rodando na porta ${PORT}`)
})