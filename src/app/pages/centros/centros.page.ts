import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions,  } from '@awesome-cordova-plugins/camera/ngx';

declare var Window

@Component({
  selector: 'app-centros',
  templateUrl: './centros.page.html',
  styleUrls: ['./centros.page.scss'],
})
export class CentrosPage {

  constructor(private camera: Camera) { }

  imagen;

  foto(){
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;

    base64Image = this.imagen;

    }, (err) => {
      console.log(err);
     // Handle error
    });
  }



  




}
