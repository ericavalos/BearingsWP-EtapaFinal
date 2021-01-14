import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/servicios/equipos.service';

@Component({
  selector: 'app-mostrar-equipos',
  templateUrl: './mostrar-equipos.component.html',
  styleUrls: ['./mostrar-equipos.component.css']
})
export class MostrarEquiposComponent implements OnInit {
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
