import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraOptions,  } from '@awesome-cordova-plugins/camera/ngx';




@Component({
  selector: 'app-renovacion',
  templateUrl: './renovacion.page.html',
  styleUrls: ['./renovacion.page.scss'],
})
export class RenovacionPage implements OnInit {


  constructor(private APIService: APIService, private alertController: AlertController, public toastController: ToastController, private router: Router, private loadingCtrl: LoadingController,private camera: Camera,) { }
  private tutorialHidden: boolean = true;
  comprobante;
  constancia;
  curp = sessionStorage.getItem('curp');
  usuarios;
  tutor = sessionStorage.getItem('tutor');
  dir1;
  dir2;


    tipo_vialidad;
    nombre_vialidad;
    noext;
    noint;
    tipo_asentamiento;
    nombre_asentamiento;
    ecalle;
    ycalle;
    correo;
    cp;
    tel_casa;
    tel_cel;
    tel_recados1;
    tel_rec2;
    nb_escuela;
    id_escolaridad;
    grado;
    tipo_escuela;
    clave_escuela;
    tel_escuela;
    actividad;
    beca;
    ingresos;
    
    sustancia
    qsustancia;
    embarazo;
    centro;
  

  ngOnInit() {
    console.log(this.tutor)
    this.cargando();
    this.APIService.perfilReno(this.curp).subscribe(res => {
      this.usuarios = res;
      console.log(this.usuarios);
      this.dir1 = this.usuarios[0].nombre_vialidad + ', ' + this.usuarios[0].num_exterior + ', int. ' + this.usuarios[0].num_interior;
      this.dir2 = this.usuarios[0].nombre_asentamiento + ', ' + this.usuarios[0].delegacion + ', CP ' + this.usuarios[0].codigo_postal;
    },
      (err) => {
        console.log(err);
        this.errorAlert();
      });
    this.APIService.perfilTutor(this.curp).subscribe(res => {
      this.usuarios = res;
    },
      (err) => {
        console.log(err);
        this.errorAlert();
      });

  }

  onSubmit() {
    let datos = {
      curp: this.curp,
      tipo_vialidad: this.tipo_vialidad,
      nombre_vialidad: this.nombre_vialidad,
      noext: this.noext,
      noint: this.noint,
      tipo_asentamiento: this.tipo_asentamiento,
      nombre_asentamiento: this.nombre_asentamiento,
      ecalle: this.ecalle,
      ycalle: this.ycalle,
      correo: this.correo,
      cp: this.cp,
      tel_casa: this.tel_casa,
      tel_cel: this.tel_cel,
      tel_recados1: this.tel_recados1,
      tel_rec2: this.tel_rec2,
      nb_escuela: this.nb_escuela,
      id_escolaridad: this.id_escolaridad,
      grado: this.grado,
      tipo_escuela: this.tipo_escuela,
      clave_escuela: this.clave_escuela,
      tel_escuela: this.tel_escuela,
      actividad: this.actividad,
      beca: this.beca,
      ingresos: this.ingresos,
      comp64: this.comprobante,
      const64: this.constancia,

      // sustancia: this.sustancia,
      // qsustancia: this.qsustancia,
      // embarazo: this.embarazo,
      // centro: this.centro,
    }
    this.cargando();
    this.APIService.renovacionBene(datos).subscribe(res => {
      this.guardoRenovacion();
      this.router.navigate(['leona-tabs'],);
    },
      (err) => {
        console.log(err);
        this.errorAlert();
      });
      
  }

  abrirTutorial() {

    if (this.tutorialHidden === true) {

      this.tutorialHidden = false;
      document.getElementById("tutorial").hidden = false;

    } else if (this.tutorialHidden === false) {

      this.tutorialHidden = true;
      document.getElementById("tutorial").hidden = true;

    }

  }

  private centroHidden: boolean = true;

  abrirCentro1() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("AO").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("AO").hidden = true;

    }

  }

  abrirCentro2() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("AZ").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("AZ").hidden = true;

    }

  }

  abrirCentro3() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("BJ").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("BJ").hidden = true;

    }

  }

  abrirCentro4() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("CY").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("CY").hidden = true;

    }

  }

  abrirCentro5() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("CJ").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("CJ").hidden = true;

    }

  }

  abrirCentro6() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("CH").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("CH").hidden = true;

    }

  }

  abrirCentro7() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("GAM").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("GAM").hidden = true;

    }

  }

  abrirCentro8() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("IZ").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("IZ").hidden = true;

    }

  }

  abrirCentro9() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("IZT").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("IZT").hidden = true;

    }

  }

  abrirCentro10() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("MC").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("MC").hidden = true;

    }

  }

  abrirCentro11() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("MH").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("MH").hidden = true;

    }

  }

  abrirCentro12() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("MA").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("MA").hidden = true;

    }

  }

  abrirCentro13() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("TL").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("TL").hidden = true;

    }

  }

  abrirCentro14() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("VC").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("VC").hidden = true;

    }

  }

  abrirCentro15() {

    if (this.centroHidden === true) {

      this.centroHidden = false;
      document.getElementById("XC").hidden = false;

    } else if (this.centroHidden === false) {

      this.centroHidden = true;
      document.getElementById("XC").hidden = true;

    }

  }

  async guardoRenovacion() {
    const alert = await this.alertController.create({
      header: '¡Listo!',
      animated: true,
      subHeader: 'Se han guardado y enviado tus datos para revisión.',
      message: 'Renovacion guardada',
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

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Error 503',
      subHeader: 'Error durante la conexión ',
      message: 'No se puede conectar con el servidor',
      buttons: ['OK'],
    });
    await alert.present();
  }

  fotoComprobante(){
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true,
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.comprobante = base64Image;

    }, (err) => {
      console.log(err);
     // Handle error
    });
  }

  fotoConstancia(){
  const options: CameraOptions = {
    quality: 80,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA,
    correctOrientation: true,
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   let base64Image = 'data:image/jpeg;base64,' + imageData;
   this.constancia = base64Image;

  }, (err) => {
    console.log(err);
   // Handle error
  });
}

}   
