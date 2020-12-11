import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private afs: AngularFirestore) { }

  getallUsers() {
    return this.afs.collection('user').snapshotChanges();
  }

  getAllOrders() {
    return this.afs.collection('order').snapshotChanges();
  }

}
