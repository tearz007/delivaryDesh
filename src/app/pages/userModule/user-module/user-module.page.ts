import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DashService } from 'src/app/service/dash/dash.service';

@Component({
  selector: 'app-user-module',
  templateUrl: './user-module.page.html',
  styleUrls: ['./user-module.page.scss'],
})
export class UserModulePage implements OnInit {
  users = []
  constructor( private deshService: DashService,public modalCtrl: ModalController) { }

  ngOnInit() {
    this.getUsers()
  }


  getUsers() {
    this.deshService.getallUsers().subscribe(userData => {
      this.users = []
      userData.forEach(a => {
        var data: any = a.payload.doc.data();
        data.id = a.payload.doc.id;
        this.users.push(data)
      });

      this.users.forEach(item => {
        console.log(item)
      });

    })
    
  }




  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
