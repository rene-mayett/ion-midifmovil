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

}
