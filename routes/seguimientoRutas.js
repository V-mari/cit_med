const express = require('express')

const {listarSeguimientos, crearSeguimiento, modificarSeguimientoPorId, eliminarSeguimientoPorId,reporteSeguimientoActivos}=require("../controllers/seguimientoController");

const rutas = express.Router()

//1.- listar todos
rutas.get('/listarSeguimientos',listarSeguimientos);
//2.- crear
rutas.post('/crearSeguimientos',crearSeguimiento);
//3.- update
rutas.put('/modificarSeguimientos/:id',modificarSeguimientoPorId);
//4.- Eliminar
rutas.delete("/eliminarSeguimientos/:id", eliminarSeguimientoPorId);

//R2 obtener todos los activos, cantidad de seguimientos, detalle seguimiento y detalle de ubicacion origen y destino
rutas.get('/reporte-seguimientos-activos/:activoId',reporteSeguimientoActivos);

module.exports = rutas