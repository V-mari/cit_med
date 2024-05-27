const express=require("express");
const rutas=express.Router();
const TitularModel=require("../model/Titular");
const {listarTitulares,    crearTitular,    modificarTitularPorId,
    eliminarTitularPorId,    obtentenerTitularPorId}=require("../controllers/titularController");

//1.- listar todos
rutas.get('/listarTitulares',listarTitulares);
//2.- crear
rutas.post('/crearTitulares',crearTitular);
//3.- update
rutas.put('/modificarTitulares/:id',modificarTitularPorId);

//4.- Eliminar
rutas.delete("/eliminarTitulares/:id", eliminarTitularPorId);

module.exports=rutas;