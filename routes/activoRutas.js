const express=require("express");
const rutas=express.Router();
const ActivoModel=require("../model/Activo");
const {listarActivos,    crearActivo,    modificarPorId,    eliminarPorId,    obtentenerActivoPorId,
    listarActivosPorTipoMarca,    listarActivosPorTipoMarcaTexto,    busquedaPorTexto,    
    listarActivosActivos,    obtenerCantidadActivosActivos,activosPorTitular}=require("../controllers/activoController");

//1.- listar todos
rutas.get('/listarActivos',listarActivos);
//2.- crear
rutas.post('/crearActivos',crearActivo);
//3.- update
rutas.put('/modificarActivos/:id',modificarPorId);
//4.- Eliminar
rutas.delete("/eliminarActivos/:id",eliminarPorId);
//5. obtener una activos por su ID
rutas.get('/listarActivos-porid/:id', obtentenerActivoPorId);
//6.- listar todos los activos por tipo o marca de manera exacta
rutas.get('/listarActivos-por-tipo-marca/:tipo/:marca',listarActivosPorTipoMarca);
//7.- listar todos los activos que contengan el texto ingresado en tipo o marca (ambos)
rutas.get('/listarActivos-por-tipo-marca-texto/:texto',listarActivosPorTipoMarcaTexto);
//8.- obtener lista de activos que tenga el texto de busqueda en cualquiera de sus campos
rutas.get('/listarActivos-busqueda/:texto',busquedaPorTexto);
//9.- obtener los activos diferentes al estado inactivo
rutas.get('/listarActivos-activos',listarActivosActivos);
//10.- obtener la cantidad de activos 
rutas.get('/listarActivos-cantidad-activos',obtenerCantidadActivosActivos);
//R1 obtener activos correspondientes al id de un titular
rutas.get('/activosActivos-por-titular/:titularId',activosPorTitular);



module.exports=rutas;