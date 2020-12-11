import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderModulePage } from './order-module.page';

const routes: Routes = [
  {
    path: '',
    component: OrderModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderModulePageRoutingModule {}
