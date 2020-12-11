import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderModulePageRoutingModule } from './order-module-routing.module';

import { OrderModulePage } from './order-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderModulePageRoutingModule
  ],
  declarations: [OrderModulePage]
})
export class OrderModulePageModule {}
