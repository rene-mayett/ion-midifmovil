import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'listado',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'redes',
    loadChildren: () => import('./redes/redes.module').then( m => m.RedesPageModule)
  },
  {
    path: 'leona',
    loadChildren: () => import('./pages/leona/leona.module').then( m => m.LeonaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'centros',
    loadChildren: () => import('./pages/centros/centros.module').then( m => m.CentrosPageModule)
  },
  {
    path: 'leona-tabs',
    loadChildren: () => import('./leona-tabs/leona-tabs.module').then( m => m.LeonaTabsPageModule)
  },
  {
    path: 'leona-notificaciones',
    loadChildren: () => import('./pages/leona-notificaciones/leona-notificaciones.module').then( m => m.LeonaNotificacionesPageModule)
  },
  {
    path: 'leona-perfil',
    loadChildren: () => import('./pages/leona-perfil/leona-perfil.module').then( m => m.LeonaPerfilPageModule)
  },
  {
    path: 'leona-renovacion',
    loadChildren: () => import('./pages/leona-renovacion/leona-renovacion.module').then( m => m.LeonaRenovacionPageModule)
  },
  {
    path: 'leona-atenciones',
    loadChildren: () => import('./pages/leona-atenciones/leona-atenciones.module').then( m => m.LeonaAtencionesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
