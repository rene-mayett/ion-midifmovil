import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { ToastController,LoadingController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leona-perfil',
  templateUrl: './leona-perfil.page.html',
  styleUrls: ['./leona-perfil.page.scss'],
})
export class LeonaPerfilPage implements OnInit {

  constructor(private APIService: APIService, private alertController: AlertController, public toastController: ToastController, private router: Router,private loadingCtrl: LoadingController) { }

  curp = sessionStorage.getItem('curp');
  usuarios;
  tutor;
  ngOnInit() {
    // this.usuarios = this.APIService.perfilLeona(this.curp);
    // console.log(this.usuarios);
    this.cargando();
    this.APIService.perfilLeona(this.curp).subscribe(res => {
        this.usuarios = res;
        console.log(this.usuarios);
        this.tutor = this.usuarios[0].nombre_tutor+' '+this.usuarios[0].apellido_paterno_tutor + ' ' + this.usuarios[0].apellido_materno_tutor;
        sessionStorage.setItem('tutor', this.tutor);
    },
    (err) => {
      console.log(err);
      this.router.navigate(['leona'],);
      sessionStorage.clear();
      this.errorAlert();
    });

  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Error 503',
      subHeader: 'Error durante la conexión ',
      message: 'No se puede conectar con el servidor, por favor vuelva a iniciar sesión',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async cargando() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 1000,
    });
    loading.present();
  }

}

