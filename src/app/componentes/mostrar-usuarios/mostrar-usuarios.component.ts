import { Component, OnInit} from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service'


@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',  
  styleUrls: ['./mostrar-usuarios.component.css']
})

export class MostrarUsuariosComponent{

  ListaMostrarUsuarios: any [] = [];
  
  constructor(private usuarios: UsuariosService) {
    this.usuarios.getMostrarUsuarios().subscribe( (data:any) => {
      this.ListaMostrarUsuarios = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
