const config=require("./dbconfig")

class Mantencion{
    constructor(id,tecnico,equipo,fecha,tipo,descripcion){
        this.id=id;
        this.tecnico=tecnico;
        this.equipo=equipo;
        this.fecha=fecha;
        this.tipo=tipo;
        this.descripcion=descripcion;
    }
}

module.exports=config;