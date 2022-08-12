import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeonaPerfilPage } from './leona-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: LeonaPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeonaPerfilPageRoutingModule {}
