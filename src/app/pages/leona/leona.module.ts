import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeonaPageRoutingModule } from './leona-routing.module';

import { LeonaPage } from './leona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeonaPageRoutingModule
  ],
  declarations: [LeonaPage]
})
export class LeonaPageModule {}
