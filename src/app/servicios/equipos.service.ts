import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  constructor(private http: HttpClient) {
    console.log('Equipos servicio listo -- ');   
  }
  getEquipos(){
    return this.http.get('http://localhost:8090/obtenerEquipos');
  }
}
