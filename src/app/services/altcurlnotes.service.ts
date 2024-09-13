import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {

  Firestore,
  serverTimestamp,
} from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class AltcurlnotesService {
  // userId: string;
  // altcurlOne: AngularFirestoreCollection<any>;
  // altcurlNotes1: AngularFirestoreCollection<any>;
  // altcurlNotes2: AngularFirestoreCollection<any>;
  // altcurlNotes3: AngularFirestoreCollection<any>;
  // altcurlNotes4: AngularFirestoreCollection<any>;
  // altcurlNotes5: AngularFirestoreCollection<any>;
  // altcurlNotes6: AngularFirestoreCollection<any>;
  datepipe: any;


  constructor(
    public auth: Auth,
    private firestore: Firestore,
  ) {

    // this.auth.authState.subscribe(user => {
    //   this.userId = user.uid;

    //   this.altcurlNotes1 = this.afs.collection(`/userProfile/${user.uid}/altcurlNotes1`);
    //   this.altcurlNotes2 = this.afs.collection(`/userProfile/${user.uid}/altcurlNotes2`);
    //   this.altcurlNotes3 = this.afs.collection(`/userProfile/${user.uid}/altcurlNotes3`);
    //   this.altcurlNotes4 = this.afs.collection(`/userProfile/${user.uid}/altcurlNotes4`);
    //   this.altcurlNotes5 = this.afs.collection(`/userProfile/${user.uid}/altcurlNotes5`);
    //   this.altcurlNotes6 = this.afs.collection(`/userProfile/${user.uid}/altcurlNotes6`);

    // });
  }


  getAltcurlNotes1() {
    // return this.afs.collection(`userProfile/${this.userId}/altcurlNotes1`,
    //   ref =>
    //     ref.orderBy('dateToday', 'desc').limit(78)
    // );
  }
  getAltcurlNotes2() {
    // return this.afs.collection(`userProfile/${this.userId}/altcurlNotes2`,
    //   ref =>
    //     ref.orderBy('dateToday', 'desc').limit(78)
    // );
  }
  getAltcurlNotes3() {
    // return this.afs.collection(`userProfile/${this.userId}/altcurlNotes3`,
    //   ref =>
    //     ref.orderBy('dateToday', 'desc').limit(78)
    // );
  }
  getAltcurlNotes4() {
    // return this.afs.collection(`userProfile/${this.userId}/altcurlNotes4`,
    //   ref =>
    //     ref.orderBy('dateToday', 'desc').limit(78)
    // );
  }
  getAltcurlNotes5() {
    // return this.afs.collection(`userProfile/${this.userId}/altcurlNotes5`,
    //   ref =>
    //     ref.orderBy('dateToday', 'desc').limit(78)
    // );
  }
  getAltcurlNotes6() {
    // return this.afs.collection(`userProfile/${this.userId}/altcurlNotes6`,
    //   ref =>
    //     ref.orderBy('dateToday', 'desc').limit(78)
    // );
  }
  async createNote1(
    note: string,
  ): Promise<any> {
    // const newNote1Ref: firebase.firestore.DocumentReference = await this.altcurlNotes1.add(
    //   {}
    // );
    // return newNote1Ref.update({
    //   note,
    //   dateToday: firebase.firestore.FieldValue.serverTimestamp(),
    //   id: newNote1Ref.id,
    // });
  }

  async createNote2(
    note: string,
  ): Promise<any> {
    // const newNote2Ref: firebase.firestore.DocumentReference = await this.altcurlNotes2.add(
    //   {}
    // );
    // return newNote2Ref.update({
    //   note,
    //   dateToday: firebase.firestore.FieldValue.serverTimestamp(),
    //   id: newNote2Ref.id
    // });
  }

  async createNote3(
    note: string,
  ): Promise<any> {
    // const newNote3Ref: firebase.firestore.DocumentReference = await this.altcurlNotes3.add(
    //   {}
    // );
    // return newNote3Ref.update({
    //   note,
    //   dateToday: firebase.firestore.FieldValue.serverTimestamp(),
    //   id: newNote3Ref.id
    // });
  }
  async createNote4(
    note: string,
  ): Promise<any> {
    // const newNote4Ref: firebase.firestore.DocumentReference = await this.altcurlNotes4.add(
    //   {}
    // );
    // return newNote4Ref.update({
    //   note,
    //   dateToday: firebase.firestore.FieldValue.serverTimestamp(),
    //   id: newNote4Ref.id
    // });
  }
  async createNote5(
    note: string,
  ): Promise<any> {
    // const newNote5Ref: firebase.firestore.DocumentReference = await this.altcurlNotes5.add(
    //   {}
    // );
    // return newNote5Ref.update({
    //   note,
    //   dateToday: serverTimestamp(),
    //   id: newNote5Ref.id
    // });
  }
  async createNote6(
    note: string,
  ): Promise<any> {
    // const newNote6Ref: firebase.firestore.DocumentReference = await this.altcurlNotes6.add(
    //   {}
    // );
    // return newNote6Ref.update({
    //   note,
    //   dateToday: firebase.firestore.FieldValue.serverTimestamp(),
    //   id: newNote6Ref.id
    // });
  }

}
