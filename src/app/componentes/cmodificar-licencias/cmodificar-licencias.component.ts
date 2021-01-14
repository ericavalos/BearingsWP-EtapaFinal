import { Component, OnInit } from '@angular/core';
import { LicenciasService } from 'src/app/servicios/licencias.service';

@Component({
  selector: 'app-cmodificar-licencias',
  templateUrl: './cmodificar-licencias.component.html',
  styleUrls: ['./cmodificar-licencias.component.css']
})
export class CModificarLicenciasComponent implements OnInit {
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
