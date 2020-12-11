import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DashService } from 'src/app/service/dash/dash.service';
import { OrderModulePage } from '../../orderModule/order-module/order-module.page';
import { UserModulePage } from '../../userModule/user-module/user-module.page';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage implements OnInit {

  constructor(private deshService: DashService, public modalController: ModalController) { }
  users = []
  orders = []
  ngOnInit() {

  }

  getUsers() {
    /*this.deshService.getallUsers().subscribe(userData => {
      this.users = []
      userData.forEach(a => {
        var data: any = a.payload.doc.data();
        data.id = a.payload.doc.id;
        this.users.push(data)
      });

      this.users.forEach(item => {
        console.log(item)
      });

    })*/
    this.userModal()
  }

  getOrders() {
   /* this.deshService.getAllOrders().subscribe(userData => {
      this.orders = []
      userData.forEach(a => {
        var data: any = a.payload.doc.data();
        data.id = a.payload.doc.id;
        this.orders.push(data)
      });

      this.orders.forEach(item => {
        console.log(item)
      });

    })*/
    this.orderModal()
  }

  async userModal() {
    const modal = await this.modalController.create({
      component: UserModulePage,
      cssClass: 'my-custom-class',

    });
    return await modal.present();
  }

  async orderModal() {
    const modal = await this.modalController.create({
      component: OrderModulePage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }


}
