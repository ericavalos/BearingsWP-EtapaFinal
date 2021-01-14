import { Component, OnInit } from '@angular/core';
import { LicenciasService } from 'src/app/servicios/licencias.service';

@Component({
  selector: 'app-mostrar-licencias',
  templateUrl: './mostrar-licencias.component.html',
  styleUrls: ['./mostrar-licencias.component.css']
})
export class MostrarLicenciasComponent implements OnInit {
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
