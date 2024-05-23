// Importación de Express
const express = require('express');

// Creación de una instancia de Express
const app = express();

// Importación del enrutador de Express
const router = express.Router();

// Puerto en el que escuchará el servidor
const port = 3000;


const mongoose = require('mongoose');


// Estableciendo la URL de conexión a la base de datos.
// Si existe una variable de entorno DB_URL, la usamos; de lo contrario, utilizamos una cadena de conexión local.
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/mi_base_de_datos';

// Conectando a la base de datos MongoDB utilizando Mongoose.
// Usamos useNewUrlParser y useUnifiedTopology para evitar advertencias de deprecación.
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Si la conexión es exitosa, mostramos un mensaje de éxito.
        console.log("Conexión a la base de datos exitosa");
    })
    .catch((error) => {
        // Si hay un error al conectar, mostramos un mensaje de error con la descripción del error.
        console.error("Error al conectar a la base de datos:", error);
    });


// Inicialización del servidor Express
app.listen(port, () => {
    // Imprime un mensaje en la consola cuando el servidor se inicia correctamente
    console.log(`Servidor escuchando en el puerto ${port}`);
});