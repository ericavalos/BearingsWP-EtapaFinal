var config=require('./dbconfig');

const sql = require('mssql');

async function getMantenciones(){
    try{
        let pool=await sql.connect(config);
        let mantenciones=await pool.request().query("select * from Mantenciones");
        return mantenciones.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getLicencias(){
    try{
        let pool=await sql.connect(config);
        let licencias=await pool.request().query("select * from Licencias");
        return licencias.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function getEquipos(){
    try{
        let pool=await sql.connect(config);
        let equipos=await pool.request().query("select * from Equipos");
        return equipos.recordsets;
    }catch(error){
        console.log(error);
    }
}

async function searchMantenciones(){
    try{
        let pool=await sql.connect(config);
        let buscar = await pool.request().query("select * from Mantenciones where id=@");
        return buscar.recordsets;
    }catch(error){
        console.log(error);
    }
}
async function getUsuarios(){
    try{
        let pool = await sql.connect(config);
        let usuarios = await pool.request().query("select * from Usuarios");
        return usuarios.recordsets;
    }catch(error){
        console.log(error);
    }
}

module.exports={
    getMantenciones: getMantenciones,
    searchMantenciones:searchMantenciones,
    getLicencias: getLicencias,
    getEquipos: getEquipos,
    getUsuarios: getUsuarios
}