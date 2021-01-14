import { Component } from '@angular/core';
import { MantencionesService } from 'src/app/servicios/mantenciones.service';

@Component({
    selector:'app-cmodificar-mantenciones',
    templateUrl:'./cmodificar-mantenciones.component.html',
    styleUrls: ['./cmodificar-mantenciones.component.css']
})

export class CModificarMantencionesComponente{
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