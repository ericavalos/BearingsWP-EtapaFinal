import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/servicios/equipos.service';
@Component({
  selector: 'app-eliminar-equipos',
  templateUrl: './eliminar-equipos.component.html',
  styleUrls: ['./eliminar-equipos.component.css']
})
export class EliminarEquiposComponent implements OnInit {
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
