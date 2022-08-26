import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  logeado;

  constructor(private router: Router, private loadingCtrl: LoadingController,) { }

  logout() {
    this.cargando();
    sessionStorage.clear();
    this.router.navigate(['home']);

  }
  async cargando() {
    const loading = await this.loadingCtrl.create({
      message: 'Cerrando la sesión...',
      duration: 500,
    });
    loading.present();
  }
}