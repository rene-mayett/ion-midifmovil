import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions,  } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-centros',
  templateUrl: './centros.page.html',
  styleUrls: ['./centros.page.scss'],
})
export class CentrosPage {

  constructor(private camera: Camera) { }

  // imagen;

  // foto(){
  //   const options: CameraOptions = {
  //     quality: 80,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType: this.camera.PictureSourceType.CAMERA,
  //     correctOrientation: true,
  //   }
    
  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64 (DATA_URL):
  //    let base64Image = 'data:image/jpeg;base64,' + imageData;

  //   this.imagen = base64Image;

  //   }, (err) => {
  //     console.log(err);
  //    // Handle error
  //   });
  // }


}
