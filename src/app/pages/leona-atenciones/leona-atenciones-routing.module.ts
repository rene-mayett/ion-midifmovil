import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeonaAtencionesPage } from './leona-atenciones.page';

const routes: Routes = [
  {
    path: '',
    component: LeonaAtencionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeonaAtencionesPageRoutingModule {}
