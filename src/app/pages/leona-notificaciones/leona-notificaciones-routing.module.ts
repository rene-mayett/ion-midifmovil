import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeonaNotificacionesPage } from './leona-notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: LeonaNotificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeonaNotificacionesPageRoutingModule {}
