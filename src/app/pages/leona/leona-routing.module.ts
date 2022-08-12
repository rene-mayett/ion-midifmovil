import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeonaPage } from './leona.page';

const routes: Routes = [
  {
    path: '',
    component: LeonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeonaPageRoutingModule {}
