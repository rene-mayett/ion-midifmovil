import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  loginLeona(usuario): Observable<any> {
    return this.http.get(`${environment.APIurl}/login?curp=${usuario.curp}&idp=${usuario.idp}`);
  }

  perfilLeona(curp): Observable<any> {
    return this.http.get(`${environment.APIurl}/menu?curp=${curp}`); // RENE
  }

  validaActivosRenovacion(curp): Observable<any> {
    return this.http.get(`${environment.APIurl}/idbaja?curp=${curp}`); // RENE
  }

  perfilReno(curp): Observable<any>{
    return this.http.get(`${environment.APIurl}/reno?curp=${curp}`) // RAMON
  }

  perfilTutor(curp): Observable<any>{
    return this.http.get(`${environment.APIurl}/tutor?curp=${curp}`) // RAMON
  }

}
