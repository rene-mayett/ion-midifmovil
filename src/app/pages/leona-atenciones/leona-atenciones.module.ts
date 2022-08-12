import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeonaAtencionesPageRoutingModule } from './leona-atenciones-routing.module';

import { LeonaAtencionesPage } from './leona-atenciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeonaAtencionesPageRoutingModule
  ],
  declarations: [LeonaAtencionesPage]
})
export class LeonaAtencionesPageModule {}
