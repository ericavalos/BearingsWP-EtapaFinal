import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LicenciasService {
  constructor(private http: HttpClient) {
    console.log('Licencias servicio listo -- ');   
  }
  getLicencias(){
    return this.http.get('http://localhost:8090/obtenerLicencias');
  }
}