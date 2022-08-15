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
  tutor;
  ngOnInit() {
    // this.usuarios = this.APIService.perfilLeona(this.curp);
    // console.log(this.usuarios);
    this.cargando();
    this.APIService.perfilReno(this.curp).subscribe(res => {
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
    
    this.cargando();
    this.APIService.perfilTutor(this.curp).subscribe(res => {
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
// var direccionesAOB = new Array();
// var direccionesAZC = new Array();
// var direccionesBJ = new Array();
// var direccionesCY = new Array();
// var direccionesCJ = new Array();
// var direccionesCUA = new Array();
// var direccionesGAM = new Array();
// var direccionesIZT = new Array();
// var direccionesIZTP = new Array();
// var direccionesMGC = new Array();
// var direccionesMAL = new Array();
// var direccionesTLA = new Array();
// var direccionesVCA = new Array();
// var direccionesXCM = new Array();


// function direccion(form) {
//       var selec = form.tipos.options;
//       var combo = form.estilo.options;
//       if (selec[1].selected == true) {
//           document.forms.item = direccionesAOB[combo.selectedIndex];
//       }
//       if (selec[2].selected == true) {
//   //         form.action = direccionesAZC[combo.selectedIndex];
//   //     }
  
//   //     if (selec[3].selected == true) {
//   //         form.action = direccionesBJ[combo.selectedIndex];
//   //     }
//   //     if (selec[4].selected == true) {
//   //         form.action = direccionesCY[combo.selectedIndex];
//   //     }
  
//   //     if (selec[5].selected == true) {
//   //         form.action = direccionesCJ[combo.selectedIndex];
//   //     }
  
//   //     if (selec[6].selected == true) {
//   //         form.action = direccionesCUA[combo.selectedIndex];
//   //     }
  
//   //     if (selec[7].selected == true) {
//   //         form.action = direccionesGAM[combo.selectedIndex];
//   //     }
  
//   //     if (selec[8].selected == true) {
//   //         form.action = direccionesIZT[combo.selectedIndex];
//   //     }
  
//   //     if (selec[9].selected == true) {
//   //         form.action = direccionesIZTP[combo.selectedIndex];
//   //     }
  
//   //     if (selec[10].selected == true) {
//   //         form.action = direccionesMGC[combo.selectedIndex];
//   //     }
  
//   //     if (selec[11].selected == true) {
//   //         form.action = direccionesMAL[combo.selectedIndex];
//   //     }
//   //     if (selec[12].selected == true) {
//   //         form.action = direccionesTLA[combo.selectedIndex];
//   //     }
  
//   //     if (selec[13].selected == true) {
//   //         form.action = direccionesVCA[combo.selectedIndex];
//   //     }
  
//   //     if (selec[14].selected == true) {
//   //         form.action = direccionesXCM[combo.selectedIndex];
//   //     }
  
//   //     if (selec[15].selected == true) {
//   //         form.action = direccionesBJ[combo.selectedIndex];
//   //     }
  
  
  
  
//   //     /*Se puede quitar una vez vemos que funciona*/
  
//   // }
  
  
  
//   // function agregarOpciones(form) {
//   //     var selec = form.tipos.options;
//   //     var combo = form.estilo.options;
//   //     combo.length = null;
  
//   //     if (selec[0].selected == true) {
//   //         var seleccionar = new Option("Esperando selección");
//   //         combo[0] = seleccionar;
//   //     }
  
//   //     if (selec[1].selected == true) {
//   //         var centro0 = new Option("Área Operativa Poniente");
//   //         var centro1 = new Option("C.A.D.I. 17");
//   //         var centro2 = new Option("C.D.C. Jalalpa");
//   //         var centro3 = new Option("C.F. 18 Leandro Valle");
//   //         var centro4 = new Option("C.F. 24 León Guzman");
//   //         combo[0] = centro0;
//   //         combo[1] = centro1;
//   //         combo[2] = centro2;
//   //         combo[3] = centro3;
//   //         combo[4] = centro4;
//   //     }
  
//   //     if (selec[2].selected == true) {
//   //         var centro0 = new Option("C.B.S.U. San Juan Tlihuaca");
//   //         var centro1 = new Option("C.D.C. Pacto Federal");
//   //         var centro2 = new Option("C.F. 01 Jose María Mata");
//   //         var centro3 = new Option("C.F. 03 Miguel Lerdo de Tejada");
//   //         combo[0] = centro0;
//   //         combo[1] = centro1;
//   //         combo[2] = centro2;
//   //         combo[3] = centro3;
//   //     }
  
//   //     if (selec[3].selected == true) {
//   //         var centro0 = new Option("Centro Recreativo Niños Héroes");
//   //         combo[0] = centro0;
//   //     }
//   //     if (selec[4].selected == true) {
//   //         var centro0 = new Option("C.B.S.U. Ajusco");
//   //         var centro1 = new Option("C.D.C. Adolfo Ruiz Cortines");
//   //         var centro2 = new Option("C.D.C. Familia Juárez Maza");
//   //         var centro3 = new Option("C.D.C. Francisco I. Madero");
//   //         var centro4 = new Option("C.F. 17 Jose María Díaz Ordaz");
//   //         var centro5 = new Option("C.F. 20 Gral. Manuel González Ortega");
//   //         combo[0] = centro0;
//   //         combo[1] = centro1;
//   //         combo[2] = centro2;
//   //         combo[3] = centro3;
//   //         combo[4] = centro4;
//   //         combo[5] = centro5;
//   //     }
  
//   //     if (selec[5].selected == true) {
//   //         var centro0 = new Option("C.D.C. Jose María Morelos y Pavón");
//   //         combo[0] = centro0;
//   //     }
  
//   //     if (selec[6].selected == true) {
//   //         var centro0 = new Option("C.A.D.I. 15");
//   //         var centro1 = new Option("C.A.D.I. 19");
//   //         var centro2 = new Option("C.A.D.I. 20");
//   //         var centro3 = new Option("C.D.C. Cuauhtémoc");
//   //         var centro4 = new Option("C.D.C. República Española");
//   //         var centro5 = new Option("Centro de día Núm. 1");
//   //         var centro6 = new Option("Centro de día Núm. 2");
//   //         var centro7 = new Option("Comedor Familiar Núm. 1");
//   //         combo[0] = centro0;
//   //         combo[1] = centro1;
//   //         combo[2] = centro2;
//   //         combo[3] = centro3;
//   //         combo[4] = centro4;
//   //         combo[5] = centro5;
//   //         combo[6] = centro6;
//   //         combo[7] = centro7;
//   //     }
  
//   //     if (selec[7].selected == true) {
//   //         var centro0 = new Option("Área Operativa Norte");
//   //         var centro1 = new Option("C.B.S.U. Cuautepec");
//   //         var centro2 = new Option("C.B.S.U. Nueva Atzacoalco");
//   //         var centro3 = new Option("C.B.S.U. Zacatenco");
//   //         var centro4 = new Option("C.D.C. Álvaro Obregón");
//   //         var centro5 = new Option("C.D.C. Lázaro Cárdenas");
//   //         var centro6 = new Option("C.F. 08 Niño Jose Luis Ordaz Lopez");
//   //         var centro7 = new Option("C.F. 09 Francisco Zarco");
//   //         var centro8 = new Option("C.F. 10 Santos Degollado");
//   //         var centro9 = new Option("C.F. 11 Miguel Ramos Arizpe");
//   //         var centro10 = new Option("C.F. 12 Dr. Jose María Luis Mora");
//   //         var centro11 = new Option("C.F. 13 Matías Romero");
//   //         combo[0] = centro0;
//   //         combo[1] = centro1;
//   //         combo[2] = centro2;
//   //         combo[3] = centro3;
//   //         combo[4] = centro4;
//   //         combo[5] = centro5;
//   //         combo[6] = centro6;
//   //         combo[7] = centro7;
//   //         combo[8] = centro8;
//   //         combo[9] = centro9;
//   //         combo[10] = centro10;
//   //         combo[11] = centro11;
//   //     }
  
//   //     if (selec[8].selected == true) {
//   //         var centro0 = new Option("C.B.S.U. Benito Juárez");
//   //         var centro1 = new Option("C.D.C. Felipe Carrillo Puerto");
//   //         var centro2 = new Option("C.D.C. Ricardo Flores Magón");
//   //         var centro3 = new Option("C.D.C. Santa Anita");
//   //         var centro4 = new Option("C.F. 14 Gral. Juan N. Álvarez");
//   //         combo[0] = centro0;
//   //         combo[1] = centro1;
//   //         combo[2] = centro2;
//   //         combo[3] = centro3;
//   //         combo[4] = centro4;
//   //     }
  
//   //     if (selec[9].selected == true) {
//   //         var centro0 = new Option("Albergue Central de Abastos");
//   //         var centro1 = new Option("Área Operativa Oriente");
//   //         var centro2 = new Option("C.B.S.U. Juan Escutia");
//   //         var centro3 = new Option("C.D.C. Constitución de 1917");
//   //         var centro4 = new Option("C.D.C. Ignacio Zaragoza");
//   //         var centro5 = new Option("C.D.C. Iztapalapa Nuevo");
//   //         var centro6 = new Option("C.D.C. Josefa Ortiz de Domínguez");
//   //         var centro7 = new Option("C.D.C. Vicente Guerrero");
//   //         var centro8 = new Option("C.E.C.A.P.I.T.");
//   //         var centro9 = new Option("C.F. 06 Ignacio Manuel Altamirano");
//   //         combo[0] = centro0;
//   //         combo[1] = centro1;
//   //         combo[2] = centro2;
//   //         combo[3] = centro3;
//   //         combo[4] = centro4;
//   //         combo[5] = centro5;
//   //         combo[6] = centro6;
//   //         combo[7] = centro7;
//   //         combo[8] = centro8;
//   //         combo[9] = centro9;
//   //     }
  
//   //     if (selec[10].selected == true) {
//   //         var centro0 = new Option("C.B.S.U. Argentina");
//   //         var centro1 = new Option("C.D.C. XLIX Legislatura");
//   //         var centro2 = new Option("C.F. 07 Melchor Ocampo");
//   //         combo[0] = centro0;
//   //         combo[1] = centro1;
//   //         combo[2] = centro2;
//   //     }
  
//   //     if (selec[11].selected == true) {
//   //         var centro0 = new Option("C.D.C. Milpa Alta");
//   //         combo[0] = centro0;
//   //     }
  
//   //     if (selec[12].selected == true) {
//   //         var centro0 = new Option("C.D.C. Quetzalcóatl");
//   //         var centro0 = new Option("C.D.C. Tláhuac");
//   //         combo[0] = centro0;
//   //         combo[1] = centro1;
  
//   //     }
  
//   //     if (selec[13].selected == true) {
//   //         var centro0 = new Option("Área Operativa Sur");
//   //         var centro1 = new Option("C.D.C. Ajusco Tlalpan");
//   //         var centro2 = new Option("C.D.C. Miguel Hidalgo");
//   //         var centro3 = new Option("C.F. 19 Juan A. Mateos");
//   //         combo[0] = centro0;
//   //         combo[1] = centro1;
//   //         combo[2] = centro2;
//   //         combo[3] = centro3;
//   //     }
  
//   //     if (selec[14].selected == true) {
//   //         var centro0 = new Option("C.A.D.I. 31");
//   //         var centro1 = new Option("C.D.C. Adolfo López Mateos");
//   //         var centro2 = new Option("C.D.C. Rosario Castellanos");
//   //         var centro3 = new Option("C.D.C. Venustiano Carranza");
//   //         var centro4 = new Option("C.F. 02 General Ignacio Zaragoza");
//   //         var centro5 = new Option("C.F. 04 Ignacio Ramirez");
//   //         combo[0] = centro0;
//   //         combo[1] = centro1;
//   //         combo[2] = centro2;
//   //         combo[3] = centro3;
//   //         combo[4] = centro4;
//   //         combo[5] = centro5;
//   //     }
  
//   //     if (selec[15].selected == true) {
//   //         var centro0 = new Option("C.D.C. Xochimilco");
//   //         combo[0] = centro0;
//   //     }
//   // }
  

