import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeonaRenovacionPage } from './leona-renovacion.page';

const routes: Routes = [
  {
    path: '',
    component: LeonaRenovacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeonaRenovacionPageRoutingModule {}
