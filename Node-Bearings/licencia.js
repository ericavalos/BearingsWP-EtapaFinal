const config=require("./dbconfig")

class Licencia{
    constructor(id,nombre,cantidad,fecha,descripcion){
        this.id=id;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.fecha=fecha;
        this.descripcion=descripcion;
    }
}

module.exports=config;