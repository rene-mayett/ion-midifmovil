import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeonaTabsPageRoutingModule } from './leona-tabs-routing.module';

import { LeonaTabsPage } from './leona-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeonaTabsPageRoutingModule
  ],
  declarations: [LeonaTabsPage]
})
export class LeonaTabsPageModule {}
