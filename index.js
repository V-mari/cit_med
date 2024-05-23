const express = require('express');
const app = express();
const router = express.Router();


const port = 3000; // Puerto en el que escuchará el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});