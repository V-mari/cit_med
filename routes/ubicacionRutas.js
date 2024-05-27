const express = require('express')

const {listarUbicaciones, crearUbicacion, modificarUbicacionPorId, eliminarUbicacionPorId}=require("../controllers/ubicacionController");

const rutas = express.Router()

//1.- listar todos
rutas.get('/listarUbicaciones',listarUbicaciones);
//2.- crear
rutas.post('/crearUbicaciones',crearUbicacion);
//3.- update
rutas.put('/modificarUbicaciones/:id',modificarUbicacionPorId);
//4.- Eliminar
rutas.delete("/eliminarUbicaciones/:id", eliminarUbicacionPorId);

module.exports = rutas