import { Component } from '@angular/core';
import { MantencionesService } from 'src/app/servicios/mantenciones.service';
@Component({
    selector:'app-eliminar-mantenciones',
    templateUrl:'./eliminar-mantenciones.component.html',
    styleUrls: ['./eliminar-mantenciones.component.css']
})

export class EliminarMantencionesComponente{
    listaMantenciones: any []=[];
    constructor(private mantenciones: MantencionesService){
        this.mantenciones.getMantenciones().subscribe((data:any)=>{
            this.listaMantenciones=data;
            //console.log(data);
        })
    }
    ngOnInit(): void {
    }
}