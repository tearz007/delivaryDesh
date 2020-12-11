import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DashService } from 'src/app/service/dash/dash.service';

@Component({
  selector: 'app-order-module',
  templateUrl: './order-module.page.html',
  styleUrls: ['./order-module.page.scss'],
})
export class OrderModulePage implements OnInit {

  constructor(private deshService: DashService, public modalCtrl: ModalController) { }
  orders = []
  temp = []
  ngOnInit() {
    this.getOrders()
  }

  getOrders() {
   
    this.deshService.getAllOrders().subscribe(userData => {
      this.orders = []
      this.temp = []

      userData.forEach(a => {
        this.temp = []
        var data: any = a.payload.doc.data();
        data.id = a.payload.doc.id;
        // console.log(data)
        this.temp.push(data)

        this.temp.forEach(item => {     
        //  console.log(item.Order)
        // this.orders = []

         item.Order.forEach(a => {
           console.log(a)
           this.orders.push(a)
         });

        });
      });
    })
  }




  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });

  }

}

 /*  this.deshService.getAllOrders().subscribe(userData => {
        this.orders = []
        userData.forEach(a => {
          var data: any = a.payload.doc.data();
          data.id = a.payload.doc.id;
          this.orders.push(data)
        });
  
        this.orders.forEach(item => {
          console.log('dsfsdf')
          console.log(item.id)
        });
  
      })*/


/*    this.deshService.getAllOrders().subscribe(userData => {
      this.orders = []
      userData.forEach(a => {
        var data: any = a.payload.doc.data();
        data.id = a.payload.doc.id;
        console.log(data)
        this.temp=[]
        data.Order.forEach(item => {
          // console.log(item)
          this.temp.push(item)
        });

      });
      this.orders.push(this.temp)

      this.orders.forEach(element => {
      //  console.log(element )
      });
    })
 */