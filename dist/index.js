"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const indexRouter_1 = require("./app/Index/indexRouter");
const resizeRouter_1 = require("./app/Server/resizeRouter");
const app = express_1.default();
const PORT = 3000;
app.set('view engine', 'ejs');
app.set("views", path_1.default.resolve(process.cwd() + "/statics/templates"));
app.use('/images', resizeRouter_1.router);
app.use('/', indexRouter_1.router);
app.listen(3000, () => {
    console.log(`Server rodando na porta ${PORT}`);
});
