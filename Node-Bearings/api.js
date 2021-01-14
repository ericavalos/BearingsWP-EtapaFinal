var db=require('./dboperations');
var Mantencion=require('./mantencion');
var Licencia=require('./licencia');
var Equipo=require('./equipo');
var Usuarios = require('./usuario');

const operaciones = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app=express();
var router=express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api',router);

router.use((request,response,next) => {
    console.log('api de servicios');
    next();
})

async function obtenerMantenciones(request,response){
    var resultado=await operaciones.getMantenciones();
    response.send(resultado);
}
app.get('/obtenerMantenciones',obtenerMantenciones)

async function obtenerEquipos(request,response){
    var resultado=await operaciones.getEquipos();
    response.send(resultado);
}
app.get('/obtenerEquipos',obtenerEquipos)

async function obtenerLicencias(request,response){
    var resultado=await operaciones.getLicencias();
    response.send(resultado);
}
app.get('/obtenerLicencias',obtenerLicencias)

async function buscarMantenciones(request,response){
    var resultado=await operaciones.searchMantenciones();
    response.send(resultado);
}
app.get('/buscarMantenciones',buscarMantenciones)

async function obtenerUsuarios(request,response){
    var resultado = await dboperations.getUsuarios();
    response.send(resultado);    
 }
app.get('/obtenerUsuarios', obtenerUsuarios)

var puerto = process.env.PORT || 8090;
app.listen(puerto);
console.log('La API está corriendo en el puerto:'+puerto);