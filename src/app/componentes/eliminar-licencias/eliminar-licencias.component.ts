import { Component, OnInit } from '@angular/core';
import { LicenciasService } from 'src/app/servicios/licencias.service';

@Component({
  selector: 'app-eliminar-licencias',
  templateUrl: './eliminar-licencias.component.html',
  styleUrls: ['./eliminar-licencias.component.css']
})
export class EliminarLicenciasComponent implements OnInit {
  listaLicencias: any []=[];
  constructor(private licencias: LicenciasService){
      this.licencias.getLicencias().subscribe((data:any)=>{
          this.listaLicencias=data;
          //console.log(data);
      })
  }
  ngOnInit(): void {
  }
}
