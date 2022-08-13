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
  usuarios;
  tutor;
  ngOnInit() {
    // this.usuarios = this.APIService.perfilLeona(this.curp);
    // console.log(this.usuarios);
    this.APIService.perfilLeona(this.curp).subscribe(res => {
      this.usuarios = res;
      console.log(this.usuarios);
      this.tutor=this.usuarios[0].nombre_tutor+' '+this.usuarios[0].apellido_paterno_tutor+' '+this.usuarios[0].apellido_materno_tutor;
      localStorage.setItem('tutor',this.tutor);
    });
    
  }
}

 