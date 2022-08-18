import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { ToastController,LoadingController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-renovacion',
  templateUrl: './renovacion.page.html',
  styleUrls: ['./renovacion.page.scss'],
})
export class RenovacionPage implements OnInit {

  constructor(private APIService: APIService, private alertController: AlertController, public toastController: ToastController, private router: Router,private loadingCtrl: LoadingController) { }

  curp = sessionStorage.getItem('curp');
  usuarios;
  tutor= sessionStorage.getItem('tutor');
  dir1;
  dir2;
  ngOnInit() {
    console.log(this.tutor)
    this.cargando();
    this.APIService.perfilReno(this.curp).subscribe(res => {
        this.usuarios = res;
        console.log(this.usuarios,'DIRECCION AQUI');
        this.dir1 = this.usuarios[0].nombre_vialidad+', '+this.usuarios[0].num_exterior+', int. '+this.usuarios[0].num_interior;
        this.dir2 = this.usuarios[0].nombre_asentamiento+', '+this.usuarios[0].delegacion+', CP '+this.usuarios[0].codigo_postal;
    },
    (err) => {
      console.log(err);
      this.router.navigate(['leona'],);
      sessionStorage.clear();
      this.errorAlert();
    });
    
    this.APIService.perfilTutor(this.curp).subscribe(res => {
        this.usuarios = res;
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
      duration: 800,
    });
    loading.present();
  }

}