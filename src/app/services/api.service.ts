import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class APIService {


  constructor(private http: HttpClient) { }

  loginLeona(usuario): Observable<any> {
    return this.http.get(`https://midifmovil.dif.cdmx.gob.mx:8443/login?curp=${usuario.curp}&idp=${usuario.idp}`);
  }
  perfilLeona(curp): Observable<any> {
    return this.http.get(`https://midifmovil.dif.cdmx.gob.mx:8443/menu?curp=${curp}`); // RENE
  }

  validaActivosRenovacion(curp): Observable<any> {
    return this.http.get(`https://midifmovil.dif.cdmx.gob.mx:8443/idbaja?curp=${curp}`); // RENE
  }

  yaRenovo(curp): Observable<any> {
    return this.http.get(`https://midifmovil.dif.cdmx.gob.mx:8443/yarenovo?curp=${curp}`); // RENE
  }

  perfilReno(curp): Observable<any>{
    return this.http.get(`https://midifmovil.dif.cdmx.gob.mx:8443/reno?curp=${curp}`) // RAMON
  }

  perfilTutor(curp): Observable<any>{
    return this.http.get(`https://midifmovil.dif.cdmx.gob.mx:8443/tutor?curp=${curp}`) // RAMON
  }

  renovacionBene(datos): Observable<any>{
    return this.http.post(`https://midifmovil.dif.cdmx.gob.mx:8443/renovacion`, datos)
  }

} 
