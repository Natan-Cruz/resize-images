const express = require('express');
const ejs = require("ejs");

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set("views", __dirname + "/templates");

require('./Routes/index')(app)
require('./Routes/resize')(app)

app.listen(3000, () => {
    console.log(`Server rodando na porta ${PORT}`)
})