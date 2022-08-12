import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeonaTabsPage } from './leona-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: LeonaTabsPage,
    children:[
      {
        path: 'leona-notificaciones',
        loadChildren: () => import('../pages/leona-notificaciones/leona-notificaciones.module').then( m => m.LeonaNotificacionesPageModule)
      },
      {
        path: 'leona-perfil',
        loadChildren: () => import('../pages/leona-perfil/leona-perfil.module').then( m => m.LeonaPerfilPageModule)
      },
      {
        path: 'leona-renovacion',
        loadChildren: () => import('../pages/leona-renovacion/leona-renovacion.module').then( m => m.LeonaRenovacionPageModule)
      },
      {
        path: 'leona-atenciones',
        loadChildren: () => import('../pages/leona-atenciones/leona-atenciones.module').then( m => m.LeonaAtencionesPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeonaTabsPageRoutingModule {}
