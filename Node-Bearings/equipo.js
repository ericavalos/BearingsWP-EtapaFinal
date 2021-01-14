const config=require("./dbconfig")

class Equipo{
    constructor(id,marca,modelo,estado,valor,tipo,fecha,periodicidad){
        this.id=id;
        this.marca=marca;
        this.modelo=modelo;
        this.estado=estado;
        this.valor=valor;
        this.tipo=tipo;
        this.fecha=fecha;
        this.periodicidad=periodicidad;
    }
}

module.exports=config;