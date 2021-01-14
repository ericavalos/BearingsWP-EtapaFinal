import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MantencionesService {
  constructor(private http: HttpClient) {
    console.log('Mantenciones servicio listo -- ');   
  }
  getMantenciones(){
    return this.http.get('http://localhost:8090/obtenerMantenciones');
  }

  searchMantenciones(){
    return this.http.get('http://localhost:8090/buscarMantenciones')
  }
}
