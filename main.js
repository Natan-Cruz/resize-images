const express = require('express');
const { getDurationInMilliseconds } = require('./Utils')

const app = express();
const PORT = 3000;

require('./Routes/route')(app)
require('./Routes/stats')(app)

app.listen(3000, () => {
    console.log(`Server rodando na porta ${PORT}`)
})