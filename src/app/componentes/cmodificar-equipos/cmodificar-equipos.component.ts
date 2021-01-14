import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/servicios/equipos.service';
@Component({
  selector: 'app-cmodificar-equipos',
  templateUrl: './cmodificar-equipos.component.html',
  styleUrls: ['./cmodificar-equipos.component.css']
})
export class CmodificarEquiposComponent implements OnInit {
  listaEquipos: any []=[];
  constructor(private equipos: EquiposService){
      this.equipos.getEquipos().subscribe((data:any)=>{
          this.listaEquipos=data;
          //console.log(data);
      })
  }
  ngOnInit(): void {
  }
}
