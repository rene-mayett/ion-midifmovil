import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { ToastController,LoadingController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leona-renovacion',
  templateUrl: './leona-renovacion.page.html',
  styleUrls: ['./leona-renovacion.page.scss'],
})
export class LeonaRenovacionPage implements OnInit {

  constructor(private APIService: APIService, private alertController: AlertController, public toastController: ToastController, private router: Router,private loadingCtrl: LoadingController,){}
  curp = sessionStorage.getItem('curp');
  tutor = sessionStorage.getItem('tutor');
  usuarios;
  userSelected:any;


  ngOnInit() {
    // this.usuarios = this.APIService.perfilLeona(this.curp);
    // console.log(this.usuarios);
    this.cargando();
    this.APIService.perfilLeona(this.curp).subscribe(res => {
        this.usuarios = res;
        console.log(this.usuarios);

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
      message: 'Espere un momento porfavor...',
      duration: 1000,
    });
    loading.present();
  }

  check(){
    console.log(this.userSelected);
  }

}

