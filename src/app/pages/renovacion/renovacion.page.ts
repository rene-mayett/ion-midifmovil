import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { ToastController,LoadingController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


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
        console.log(this.usuarios);
        this.dir1 = this.usuarios[0].nombre_vialidad+', '+this.usuarios[0].num_exterior+', int. '+this.usuarios[0].num_interior;
        this.dir2 = this.usuarios[0].nombre_asentamiento+', '+this.usuarios[0].delegacion+', CP '+this.usuarios[0].codigo_postal;
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
    });

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

    datos = {
      curp: this.curp,
      tipo_vialidad: '',
      nombre_vialidad: '',
      noext: '',
      noint: '',
      tipo_asentamiento:'',
      nombre_asentamiento:'',
      ecalle:'',
      ycalle:'',
      correo:'',
      cp:'',
      tel_casa:'',
      tel_cel:'',
      tel_recados1:'',
      tel_rec2:'',
      nb_escuela:'',
      nivel:'',
      grado:'',
      tipo_escuela:'',
      clave_escuela:'',
      tel_escuela:'',
      extraescolares:'',
      beca:'',
      ingresos:'',
      embarazo:'',
      sustancia:'',
      qsustancia:'',
      centro:'',
  }


    onSubmit(){
      console.log(this.datos)
      this.APIService.renovacionBene(this.datos).subscribe(res => {
      this.datos = res;
    },
    (err) => {
      console.log(err);
    });
    }

    private tutorialHidden: boolean = true;

  abrirTutorial(){

    if(this.tutorialHidden === true){

      this.tutorialHidden = false;
      document.getElementById("tutorial").hidden = false;

    }else if(this.tutorialHidden === false){

      this.tutorialHidden = true;
      document.getElementById("tutorial").hidden = true;

    }

  }

  private centroHidden: boolean = true;

  abrirCentro1(){

    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("AO").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("AO").hidden = true;

    }

  }

  abrirCentro2(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("AZ").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("AZ").hidden = true;

    }

  }

  abrirCentro3(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("BJ").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("BJ").hidden = true;

    }

  }

  abrirCentro4(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("CY").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("CY").hidden = true;

    }

  }

  abrirCentro5(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("CJ").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("CJ").hidden = true;

    }

  }

  abrirCentro6(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("CH").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("CH").hidden = true;

    }

  }

  abrirCentro7(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("GAM").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("GAM").hidden = true;

    }

  }

  abrirCentro8(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("IZ").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("IZ").hidden = true;

    }

  }

  abrirCentro9(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("IZT").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("IZT").hidden = true;

    }

  }

  abrirCentro10(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("MC").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("MC").hidden = true;

    }

  }

  abrirCentro11(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("MH").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("MH").hidden = true;

    }

  }

  abrirCentro12(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("MA").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("MA").hidden = true;

    }

  }

  abrirCentro13(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("TL").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("TL").hidden = true;

    }

  }

  abrirCentro14(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("VC").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("VC").hidden = true;

    }

  }

  abrirCentro15(){
    
    if(this.centroHidden === true){

      this.centroHidden = false;
      document.getElementById("XC").hidden = false;

    }else if(this.centroHidden === false){

      this.centroHidden = true;
      document.getElementById("XC").hidden = true;

    }

  }



  // document = addEventListener("DOMContentLoaded", function (event) {
  //   let submitButton = this.document.querySelector("button");
  //   let textField = this.document.querySelector("input");

  //   submitButton.addEventListener("click", validarInfo);

  //   function validarInfo(){

  //     let newItem = textField.value;
  //     var bcurp = (document.getElementById("curp") as HTMLInputElement).value;
  //     var idvial = (document.getElementById("nombre_vialidad") as HTMLInputElement).value;

  //     let todo = {
  //       curp: bcurp,
  //       vialidad: idvial 
  //     };

  //     console.log(todo);

  //     fetch(`${environment.APIurl}/renovacion?curp=${bcurp}` + '&vialidad=' +idvial, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type' : 'application/json'
  //       },
  //       body: JSON.stringify(todo)
  //     }).then((res) => res.text())
  //     .then((text) => console.log(text))
  //     .catch((err) => console.log(err))
  //   };


  // });

  


}   
