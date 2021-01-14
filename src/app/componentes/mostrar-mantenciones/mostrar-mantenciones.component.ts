import { Component } from '@angular/core';
import { MantencionesService } from 'src/app/servicios/mantenciones.service';

@Component({
    selector:'app-mostrar-mantenciones',
    templateUrl:'./mostrar-mantenciones.component.html',    
    styleUrls: ['./mostrar-mantenciones.component.css']
})
export class MostrarMantencionesComponente{
    listaMantenciones: any []=[];
    listaMantencionesfiltro: any []=[];
    constructor(private mantenciones: MantencionesService){
        this.mantenciones.getMantenciones().subscribe((data:any)=>{
            this.listaMantenciones=data;
            //console.log(data);
        })
        this.mantenciones.searchMantenciones().subscribe((data:any)=>{
            this.listaMantencionesfiltro=data;
        })
    }
    ngOnInit(): void {
    }
}