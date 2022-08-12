import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeonaNotificacionesPageRoutingModule } from './leona-notificaciones-routing.module';

import { LeonaNotificacionesPage } from './leona-notificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeonaNotificacionesPageRoutingModule
  ],
  declarations: [LeonaNotificacionesPage]
})
export class LeonaNotificacionesPageModule {}
