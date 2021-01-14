import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { 
    console.log('Servicio Usuarios Listo...');

  }
  getMostrarUsuarios(){
    return this.http.get('http://localhost:8090/ObtenerMostrarUsuarios');
  }
  
}
