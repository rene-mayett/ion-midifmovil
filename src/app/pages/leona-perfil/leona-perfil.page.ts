import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-leona-perfil',
  templateUrl: './leona-perfil.page.html',
  styleUrls: ['./leona-perfil.page.scss'],
})
export class LeonaPerfilPage implements OnInit {

  constructor(private APIService: APIService,) { }

  curp = localStorage.getItem('curp');
  idp = localStorage.getItem('idp');
  ngOnInit() {
    // this.APIService.loginLeona(this.curp).subscribe(res => {
    //   if (res.length==0) {
    //     this.errorToast();
    //   }
  }

}
