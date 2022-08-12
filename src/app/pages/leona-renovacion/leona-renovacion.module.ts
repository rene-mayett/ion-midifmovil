import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeonaRenovacionPageRoutingModule } from './leona-renovacion-routing.module';

import { LeonaRenovacionPage } from './leona-renovacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeonaRenovacionPageRoutingModule
  ],
  declarations: [LeonaRenovacionPage]
})
export class LeonaRenovacionPageModule {}
