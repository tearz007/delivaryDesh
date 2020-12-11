import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashPage } from './pages/dash/dash/dash.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full'
  },
  {
    path: 'dash',component:DashPage,
    // loadChildren: () => import('./pages/dash/dash/dash.module').then( m => m.DashPageModule)
    children:[
      {
        path: 'user-module',
        loadChildren: () => import('./pages/userModule/user-module/user-module.module').then( m => m.UserModulePageModule)
      },
      {
        path: 'order-module',
        loadChildren: () => import('./pages/orderModule/order-module/order-module.module').then( m => m.OrderModulePageModule)
      },

    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
