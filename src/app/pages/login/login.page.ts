import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { ToastController,LoadingController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    idp: '',
    curp: '',
  }

  curp= '';
  idp = '';
  constructor(private APIService: APIService, private alertController: AlertController, public toastController: ToastController, private router: Router,private loadingCtrl: LoadingController) { }
  ngOnInit() {
    if(sessionStorage.getItem('curp')&&sessionStorage.getItem('idp')){
      this.showLoading();
      this.router.navigate(['leona-tabs']);
    }

  }

  onSubmit() {
    //console.log(this.usuario);
    this.cargando();
    this.APIService.loginLeona(this.usuario).subscribe(res => {
      //console.log(res);
      if (res.length==0) {
        this.errorToast();
      }
      else {
        console.log(this.curp,this.idp);
        this.curp = res[0].curp;
        this.idp = res[0].idp;
        console.log(this.curp,this.idp);
        if (this.usuario.curp == res[0].curp && this.usuario.idp == res[0].idp) {
          //localStorage.setItem('curp',this.curp);
          sessionStorage.setItem('curp',this.curp);
          sessionStorage.setItem('idp',this.idp);
          this.presentToast();
          this.router.navigate(['leona-tabs'],);
        }
      }
    },
      (err) => {
        console.log(err);
        this.errorAlert();
      });

  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Error 503',
      subHeader: 'Error durante la conexión ',
      message: 'No se puede conectar con el servidor',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: '¡Bienvenido! ',
      color: 'success',
      duration: 2500,
      icon: 'checkmark-outline',
      position: 'middle'
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'CURP o IDP incorrectos, verifique los datos e intente de nuevo por favor.',
      color: 'warning',
      duration: 5000,
      icon: 'warning-outline',
    });
    toast.present();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando perfil...',
      duration: 1500,
    });
    loading.present();
  }

  async cargando() {
    const loading = await this.loadingCtrl.create({
      message: 'Conectando...',
      duration: 900,
    });
    loading.present();
  }


}
