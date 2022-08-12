import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeonaPerfilPageRoutingModule } from './leona-perfil-routing.module';

import { LeonaPerfilPage } from './leona-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeonaPerfilPageRoutingModule
  ],
  declarations: [LeonaPerfilPage]
})
export class LeonaPerfilPageModule {}
