import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    idp: 0,
    curp: '',
    
  }
  curp= '';
  idp = '';
  constructor(private APIService: APIService, private alertController: AlertController, public toastController: ToastController, private router: Router) { }
  ngOnInit() {

    if(localStorage.getItem('curp')&&localStorage.getItem('idp')){
      this.router.navigate(['leona-tabs']);
    }

  }

  onSubmit() {
    //console.log(this.usuario);
    this.APIService.loginLeona(this.usuario).subscribe(res => {
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
          localStorage.setItem('curp',this.curp);
          localStorage.setItem('idp',this.idp);
          this.presentToast();
          this.router.navigate(['leona-tabs'],);
        }
      }
    },
      (err) => {
        console.log(err);
        this.errorAlert();
        //this.presentToast();
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
      icon: 'checkmark-outline'
      //position: 'top'
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'CURP o IDP incorrectos, verifique los datos e intente de nuevo por favor.',
      color: 'warning',
      duration: 5000,
      icon: 'warning-outline'
    });
    toast.present();
  }



}
