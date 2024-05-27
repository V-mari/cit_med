const express=require('express');
const request=require('supertest');
const activoRutas=require('../../routes/activoRutas');
const TitularModel=require('../../model/Titular');
const ActivoModel=require('../../model/Activo');
const mongoose=require('mongoose');
const app=express();
app.use(express.json());
app.use('/activos',activoRutas);

describe('Pruebas unitarias para titulares',()=>{
    // se ejectua antes de iniciar las pruebas
    beforeEach(async ()=>{
        await mongoose.connect('mongodb://127.0.0.1:27017/dbconsultas',
        {useNewUrlParser:true,
        });
        await  TitularModel.deleteMany({});
        await  ActivoModel.deleteMany({});
    });
    afterAll(()=>{
        return mongoose.connection.close();
    });

    // 1er test
    test('debe listar todos los activos correspondientes a un titular:GET /activos-por-titular/:titularId',async()=>{
        //creando dos titulares
        const titular1=await TitularModel.create({nombre:'Hannah',primer_apellido:'Acosta',segundo_apellido:"Chura",sexo:"F",fecha_nacimiento:"1990-04-15"});
        const titular2=await TitularModel.create({nombre:'Rosa',primer_apellido:'Valencia',segundo_apellido:"Nina",sexo:"F",fecha_nacimiento:"1955-04-15"});

        //creando activos relacionados a titular
        const activo1=await ActivoModel.create({
            "correlativo": 1,codigo: "PC0001",tipo: "VAGONETA",descripcion: "mediano de 4 puertas",marca: "Hansa",
            modelo: "2023",caracteristicas: "Motor de Combustión Interna, Espejos Retrovisores Motor Diésel 4 Tiempos",color: "NEGRO",fecha_compra: "2024-03-01",
            fecha_baja: null,precio_bs:8000,estado: "ACTIVO",titular:titular1._id
        });
    
       
        const activo2=await ActivoModel.create({
            "correlativo": 2,codigo: "PC0002",tipo: "CAMIONETA",descripcion: "Grande de 2 puertas",marca: "TOYOTA",
            modelo: "2023",caracteristicas: "Motor de Combustión Interna, Espejos Retrovisores Motor Diésel 4 Tiempos",color: "ROJO",fecha_compra: "2024-03-01",
            fecha_baja: null,precio_bs:8000,estado: "ACTIVO",titular:titular1._id
        });
    
        const activo3=await ActivoModel.create({
            "correlativo": 3,codigo: "PC0003",tipo: "vagoneta",descripcion: "Grande de 4 puertas",marca: "SUZUKI",
            modelo: "2023",caracteristicas: "RAM 12, SSD:480GB, CPU Corei3 4ta gen",color: "BLANCO",fecha_compra: "2024-03-01",
            fecha_baja: null,precio_bs:8000,estado: "ACTIVO",titular:titular2._id
        });

        // solicitud- request
        const res=await request(app).get('/activos/activos-por-titular/'+titular1._id);
        //console.log(res);
        //verificar la respuesta
        expect(res.statusCode).toEqual(200);
        expect(res.body.activos).toHaveLength(2);
    },10000); //tiempo en milisegundos.
});