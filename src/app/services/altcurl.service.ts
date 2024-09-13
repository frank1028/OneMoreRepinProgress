import { Injectable, inject } from '@angular/core';

import {Firestore,  getDocs, collection,  CollectionReference, query, orderBy, limit, onSnapshot, collectionData} from '@angular/fire/firestore';

import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { serverTimestamp} from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import { getFirestore,  addDoc} from 'firebase/firestore';
import { AlertController, LoadingController } from '@ionic/angular';
import { map, Observable } from 'rxjs';


const db = getFirestore();

@Injectable({
  providedIn: 'root'
})
export class AltcurlService {
  firestore: Firestore = inject(Firestore);
  private colRef: CollectionReference;


  AltcurlWarmup$: Observable<any[]>;
  altcurlOne$: Observable<any[]>;
  altcurlOne: any;
  // altcurlTwo$: Observable<any[]>;
  // altcurlThree$: Observable<any[]>;
  // altcurlFour$: Observable<any[]>;
  // altcurlFive$: Observable<any[]>;
  // altcurlSix$: Observable<any[]>;




  // altcurlsetsgoal: AngularFirestoreCollection<any>;
  // altcurlWarmup: AngularFirestoreCollection<any>;
  // altcurlOne: AngularFirestoreCollection<any>;
  // altcurlTwo: AngularFirestoreCollection<any>;
  // altcurlThree: AngularFirestoreCollection<any>;
  // altcurlFour: AngularFirestoreCollection<any>;
  // altcurlFive: AngularFirestoreCollection<any>;
  // altcurlSix: AngularFirestoreCollection<any>;
  // workoutweight: AngularFirestoreCollection<unknown>;
  // workout: AngularFirestoreCollection<any>;
  exerName!: string;
  currentDate: any = new Date().toLocaleDateString('en-us');
  datepipe: any;
  userId!: string;
  wtToday!: number;
  repsToday!: number;
  minReps!: number;
  oneRMToday!: number;
  oneRMGoal!: number;
  altercurlTwo: any;
  percentRM!: number;
  createWorkingweight: any;
  createWorkoutweight: any;
  workingweight!: number;
  createWorkingWT: any;

  deltaWT!: number;
  warmupWT!: number;
  WT!: number;
  lowReps1!: number;

  maxReps!: number;
  maxReps1!: number;
  maxRep!: number;
  TwoSets: any;
  startWT: any;
  startWT5: any;
  bestWT: any;
  startWTF!: number;
  altscurlOneRef: any;

  altcurlOneQuery: any;
  collection: any;
  collectionData: any;
q: any;




  constructor(
    public auth: Auth,
    public alertCtrl: AlertController,
    private db: Firestore,
    private loadingController: LoadingController
  ) {


  const altcurlOneRef = collection(this.firestore, "altcurlOne");
      this.altcurlOne$ = collectionData(altcurlOneRef), orderBy("dateToday", "desc"), limit(1);

    // this.auth.authState.subscribe(user => {
    //   this.userId = user.uid;
     // this.altcurlWarmup = this.collection(db, `altcurlWarmup`);

    //   this.altcurlTwo = this.afs.collection(`/userProfile/${user.uid}/altcurlTwo`);
    //   this.altcurlThree = this.afs.collection(`/userProfile/${user.uid}/altcurlThree`);
    //   this.altcurlFour = this.afs.collection(`/userProfile/${user.uid}/altcurlFour`);
    //   this.altcurlFive = this.afs.collection(`/userProfile/${user.uid}/altcurlFive`);
    //   this.altcurlSix = this.afs.collection(`/userProfile/${user.uid}/altcurlSix`);
    //   this.workout = this.afs.collection(`/userProfile/${user.uid}/workout`);
      // }
  }
  altcurl() {
    throw new Error('Method not implemented.');
  }


  async getAltcurlWarmup() {
    const altcurlWarmupRef = collection(this.db, "altcurlWarmup");

    try {
      const docsSnap = await getDocs(altcurlWarmupRef);
      docsSnap.forEach(doc => {
        console.log(doc.data());
        console.log(doc.id);
      })
    } catch (error) {
      console.log(error);
  }
}

 async getAltcurlOne() {

      const db = getFirestore();
      const dbRef = collection(db, "altcurlOne")

     //  let altcurlOne$ = [];
     //  const getaltcurlOnes = async() => {

      try {
        const docsSnap = await getDocs(dbRef);
        docsSnap.forEach(doc => {
          const altcurlOne = doc.data();

          this.altcurlOne.push(altcurlOne);

        })
      } catch (err) {
        console.log("getaltcurlOne:" + err)
      }

    //}
      // onSnapshot(dbRef, docsSnap => {
      // docsSnap.forEach(doc => {
      //   console.log(doc.data());
      // })
      // });

  }


  getAltcurlTwo() {
    const db = getFirestore();
    return this.collection(`userProfile/${this.userId}/altcurlTwo`,
      ref =>
        ref.orderBy('dateToday', 'desc').limit(1)
    );
  }getAltcurlThree() {
    const db = getFirestore();
    return this.collection(`userProfile/${this.userId}/altcurlThree`,
      ref =>
        ref.orderBy('dateToday', 'desc').limit(1)
    );
  }

getAltcurlFour() {
    // return this.collection(`userProfile/${this.userId}/altcurlFour`,
    //   ref =>
    //     ref.orderBy('dateToday', 'desc').limit(1)
    // );
  }

getAltcurlFive() {
    // return this.collection(`userProfile/${this.userId}/altcurlFive`,
    //   ref =>
    //     ref.orderBy('dateToday', 'desc').limit(1)
    // );

  }

getAltcurlSix() {
      // return this.collection(`userProfile/${this.userId}/altcurlSix`,
      //   ref =>
      //     ref.orderBy('dateToday', 'desc').limit(1)
      // );

  }



  // getAltcurlTwo(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlTwo`,
  //     ref =>
  //       ref.orderBy('dateToday', 'desc').limit(1)
  //   );
  // }

  // getAltcurlThree(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlThree`,
  //     ref =>
  //       ref.orderBy('dateToday', 'desc').limit(1)
  //   );
  // }

  // getAltcurlFour(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlFour`,
  //     ref =>
  //       ref.orderBy('dateToday', 'desc').limit(1)
  //   );
  // }
  // getAltcurlFive(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlFive`,
  //     ref =>
  //       ref.orderBy('dateToday', 'desc').limit(1)
  //   );
  // }
  // getAltcurlSix(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlSix`,
  //     ref =>
  //       ref.orderBy('dateToday', 'desc').limit(1)
  //   );
  // }
  // getAltcurlWarmupList(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlWarmup`,
  //     ref =>
  //       ref.orderBy('dateToday', 'desc').limit(78)
  //   );
  // }
  // getAltcurlOneList(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlOne`,
  //     ref =>
  //       ref.orderBy('dateToday', 'desc').limit(78)
  //   );
  // }

  // getAltcurlTwoList(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlTwo`,
  //     ref =>
  //       ref.orderBy('dateToday', 'desc').limit(78)
  //   );
  // }
  // getAltcurlThreeList(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlThree`,
  //     ref =>
  //       ref.orderBy('dateToday', 'desc').limit(78)
  //   );
  // }
  // getAltcurlFourList(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlFour`,
  //     ref =>
  //       ref.orderBy('dateToday', 'desc').limit(78)
  //   );
  // }
  // getAltcurlFiveList(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlFive`,
  //     ref =>
  //       ref.orderBy('dateToday', 'desc').limit(78)
  //   );
  // }
  // getAltcurlSixList(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlSix`,
  //     ref =>
  //       ref.orderBy('dateToday', 'desc').limit(78)
  //   );
  // }

  // getAltcurlOneFirst(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlOne`,
  //     ref =>
  //       ref.orderBy('dateToday', 'asc').limit(1)
  //   );
  // }
  // getAltcurlTwoFirst(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlTwo`,
  //     ref =>
  //       ref.orderBy('dateToday', 'asc').limit(1)
  //   );
  // }
  // getAltcurlThreeFirst(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlThree`,
  //     ref =>
  //       ref.orderBy('dateToday', 'asc').limit(1)
  //   );
  // }
  // getAltcurlFourFirst(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlFour`,
  //     ref =>
  //       ref.orderBy('dateToday', 'asc').limit(1)
  //   );
  // }
  // getAltcurlFiveFirst(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlFive`,
  //     ref =>
  //       ref.orderBy('dateToday', 'asc').limit(1)
  //   );
  // }
  // getAltcurlSixFirst(): AngularFirestoreCollection<any> {
  //   return this.afs.collection(`userProfile/${this.userId}/altcurlSix`,
  //     ref =>
  //       ref.orderBy('dateToday', 'asc').limit(1)
  //   );
  // }

  async getWorkout() {

    const workoutRef = collection(this.db, "workout");

    try {
      const docsSnap = await getDocs(workoutRef);
      docsSnap.forEach(doc => {
        console.log(doc.data());
        console.log(doc.id);
      })
    } catch (error) {
      console.log(error);
    }
  }


  async createWorkoutWarmup(
    wtToday: number,
  ): Promise<any> {

    addDoc(collection(this.db, 'altcurlWarmup'), {
      wtToday,
      dateToday: serverTimestamp(),

    }).then(newWorkoutWarmupRef => {
      console.log(newWorkoutWarmupRef.id);
    })
    .catch(error => {
      console.log(error);
    });
  }



  async createWorkoutOne(
    repsToday: number,
    wtToday: number,
    lowReps1: number,
    tinyWT: number,
    answer: string,
    answer2: string,
  ): Promise<any> {

    if (tinyWT === 1 && wtToday < 25) {
      this.deltaWT = (this.deltaWT = 1.25);
    }
    if (tinyWT === 1 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 2.5;
    }
    if (tinyWT === 3 && wtToday < 20) {
      this.deltaWT = (this.deltaWT = 1);
    }
    if (tinyWT === 3 && wtToday >= 20 && wtToday < 50) {
      this.deltaWT = 2;
    }

    if (tinyWT === 4 && wtToday < 25) {
      this.deltaWT = 5;
    }

    if (tinyWT === 4 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 5;
    }

    if (tinyWT === 2 && wtToday < 25) {
      this.deltaWT = 5;
    }

    if (tinyWT === 2 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 5;
    }
    if (wtToday >= 50 && wtToday < 100) {
      this.deltaWT = 5;
    }
    if (wtToday >= 100 && wtToday < 200) {
      this.deltaWT = 10;
    }
    if (wtToday >= 200 && wtToday < 400) {
      this.deltaWT = 20;
    }
    if (wtToday >= 400 && wtToday < 600) {
      this.deltaWT = 30;
    }
    if (wtToday >= 600) {
      this.deltaWT = 50;
    }

    this.startWT = (((wtToday * (35 + repsToday / 1)) / (lowReps1 + 35)));
    this.startWT = this.startWT.toFixed(2);
    this.startWT5 = Math.round(((this.startWT) - this.startWT % 5 ));


    if (answer === `YES`){
      this.bestWT = this.startWT;
    }

    if (answer === `NO` && answer2 === `NO`){
      this.bestWT = this.startWT5;
    }
    if (answer2 === `YES`){
      this.bestWT = this.startWT;
    }



    this.maxReps = Math.floor(((((wtToday) + (this.deltaWT)) * (35 + (lowReps1))) / (wtToday / 1)) - 35);

    if (repsToday >= this.maxReps) {
      this.WT = wtToday + this.deltaWT;
      this.warmupWT = Math.floor((.6 * this.WT) - ((.6 * this.WT) % 5));
      this.minReps = Math.floor(((wtToday * (34 + repsToday / 1 + 1) / this.WT) - 34));
      if (this.minReps <= 0) {
        this.minReps = 0;
      }
      if (this.minReps > this.maxReps) {
        this.minReps = this.maxReps;
      }
    }
    else {
      this.WT = wtToday;
      this.warmupWT = Math.floor((.6 * this.WT) - ((.6 * this.WT) % 5));
      this.minReps = Math.floor(((wtToday * (34 + repsToday / 1 + 1) / this.WT) - 34));
      if (this.minReps <= 0) {
        this.minReps = 0;
      }
    }


    this.oneRMToday = Math.floor((wtToday / 1) * ((34 / 35) + (repsToday / 35)));
    this.percentRM = Math.floor((100 * 35) / (34 + repsToday / 1 / 1));


this.colRef = collection(this.firestore, 'altcurlOne');
addDoc(this.colRef, {...this.altcurlOne,
  user: this.auth.currentUser?.uid,


    // addDoc(collection(this.db, "altcurlOne"), {

      repsToday,
      wtToday,
      lowReps1,
      oneRMToday: Number(this.oneRMToday),
      percentRM: Number(this.percentRM),
      dateToday: serverTimestamp(),
      WT: Number(this.WT),
      warmupWT: Number(this.warmupWT),
      deltaWT: Number(this.deltaWT),
      minReps: Number(this.minReps),
      maxReps: Number(this.maxReps),
      startWT: Number(this.startWT),
      startWT5: Number(this.startWT5),
      bestWT: Number(this.bestWT),
    })
    .then(colRef => {
      console.log(colRef.id);
      console.log(colRef);
    })
    .catch(error => {
      console.log(error);
    });

    await this.loadingController.dismiss();
  }


  async createWorkoutTwo(
    repsToday: number,
    wtToday: number,
    lowReps1: number,
    tinyWT: number,
  ): Promise<any> {


    if (tinyWT === 1 && wtToday < 25) {
      this.deltaWT = (this.deltaWT = 1.25);
    }
    if (tinyWT === 1 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 2.5;
    }
    if (tinyWT === 3 && wtToday < 20) {
      this.deltaWT = (this.deltaWT = 1);
    }
    if (tinyWT === 3 && wtToday >= 20 && wtToday < 50) {
      this.deltaWT = 2;
    }

    if (tinyWT === 4 && wtToday < 25) {
      this.deltaWT = 5;
    }

    if (tinyWT === 4 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 5;
    }

    if (tinyWT === 2 && wtToday < 25) {
      this.deltaWT = 5;
    }

    if (tinyWT === 2 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 5;
    }
    if (wtToday >= 50 && wtToday < 100) {
      this.deltaWT = 5;
    }
    if (wtToday >= 100 && wtToday < 200) {
      this.deltaWT = 10;
    }
    if (wtToday >= 200 && wtToday < 400) {
      this.deltaWT = 20;
    }
    if (wtToday >= 400 && wtToday < 600) {
      this.deltaWT = 30;
    }
    if (wtToday >= 600) {
      this.deltaWT = 50;
    }



    this.maxReps = Math.floor(((((wtToday) + (this.deltaWT)) * (35 + (lowReps1))) / (wtToday / 1)) - 35);

    if (repsToday >= this.maxReps) {
      this.WT = wtToday + this.deltaWT;
      this.warmupWT = Math.floor((.6 * this.WT) - ((.6 * this.WT) % 5));
      this.minReps = Math.floor(((wtToday * (34 + repsToday / 1 + 1) / this.WT) - 34));
      if (this.minReps <= 0) {
        this.minReps = 0;
      }
      if (this.minReps > this.maxReps) {
        this.minReps = this.maxReps;
      }
    }
    else {
      this.WT = wtToday;
      this.warmupWT = Math.floor((.6 * this.WT) - ((.6 * this.WT) % 5));
      this.minReps = Math.floor(((wtToday * (34 + repsToday / 1 + 1) / this.WT) - 34));
      if (this.minReps <= 0) {
        this.minReps = 0;
      }
    }


    this.oneRMToday = Math.floor((wtToday / 1) * ((34 / 35) + (repsToday / 35)));
    this.percentRM = Math.floor((100 * 35) / (34 + repsToday / 1));

    addDoc(collection(this.db, 'altcurlTwo'), {
      repsToday,
      wtToday,
      lowReps1,
      oneRMToday: Number(this.oneRMToday),
      percentRM: Number(this.percentRM),
      dateToday: serverTimestamp(),

      WT: Number(this.WT),
      warmupWT: Number(this.warmupWT),
      deltaWT: Number(this.deltaWT),
      minReps: Number(this.minReps),
      maxReps: Number(this.maxReps),
    }) .then(newWorkoutTwoRef => {
      console.log(newWorkoutTwoRef.id);
    })
    .catch(error => {
      console.log(error);
    });
  }


  async createWorkoutThree(
    repsToday: number,
    wtToday: number,
    lowReps1: number,
    tinyWT: number,
  ): Promise<any> {


    if (tinyWT === 1 && wtToday < 25) {
      this.deltaWT = (this.deltaWT = 1.25);
    }
    if (tinyWT === 1 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 2.5;
    }
    if (tinyWT === 3 && wtToday < 20) {
      this.deltaWT = (this.deltaWT = 1);
    }
    if (tinyWT === 3 && wtToday >= 20 && wtToday < 50) {
      this.deltaWT = 2;
    }
    if (tinyWT === 4 && wtToday < 25) {
      this.deltaWT = 5;
    }

    if (tinyWT === 4 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 5;
    }

    if (tinyWT === 2 && wtToday < 25) {
      this.deltaWT = 5;
    }

    if (tinyWT === 2 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 5;
    }
    if (wtToday >= 50 && wtToday < 100) {
      this.deltaWT = 5;
    }
    if (wtToday >= 100 && wtToday < 200) {
      this.deltaWT = 10;
    }
    if (wtToday >= 200 && wtToday < 400) {
      this.deltaWT = 20;
    }
    if (wtToday >= 400 && wtToday < 600) {
      this.deltaWT = 30;
    }
    if (wtToday >= 600) {
      this.deltaWT = 50;
    }

    this.maxReps = Math.floor(((((wtToday) + (this.deltaWT)) * (35 + (lowReps1))) / (wtToday / 1)) - 35);

    if (repsToday >= this.maxReps) {
      this.WT = wtToday + this.deltaWT;
      this.warmupWT = Math.floor((.6 * this.WT) - ((.6 * this.WT) % 5));
      this.minReps = Math.floor(((wtToday * (34 + repsToday / 1 + 1) / this.WT) - 34));
      if (this.minReps <= 0) {
        this.minReps = 0;
      }
      if (this.minReps > this.maxReps) {
        this.minReps = this.maxReps;
      }
    }
    else {
      this.WT = wtToday;
      this.warmupWT = Math.floor((.6 * this.WT) - ((.6 * this.WT) % 5));
      this.minReps = Math.floor(((wtToday * (34 + repsToday / 1 + 1) / this.WT) - 34));
      if (this.minReps <= 0) {
        this.minReps = 0;
      }
    }


    this.oneRMToday = Math.floor((wtToday / 1) * ((34 / 35) + (repsToday / 35)));
    this.percentRM = Math.floor((100 * 35) / (34 + repsToday / 1));

    addDoc(collection(this.db, 'altcurlThree'), {
      repsToday,
      wtToday,
      lowReps1,
      oneRMToday: Number(this.oneRMToday),
      percentRM: Number(this.percentRM),
      dateToday: serverTimestamp(),

      WT: Number(this.WT),
      warmupWT: Number(this.warmupWT),
      deltaWT: Number(this.deltaWT),
      minReps: Number(this.minReps),
      maxReps: Number(this.maxReps),
    }) .then(newWorkoutThreeRef => {
      console.log(newWorkoutThreeRef.id);
    })
    .catch(error => {
      console.log(error);
    });
  }

  async createWorkoutFour(
    repsToday: number,
    wtToday: number,
    lowReps1: number,
    tinyWT: number,
  ): Promise<any> {


    if (tinyWT === 1 && wtToday < 25) {
      this.deltaWT = (this.deltaWT = 1.25);
    }
    if (tinyWT === 1 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 2.5;
    }
    if (tinyWT === 3 && wtToday < 20) {
      this.deltaWT = (this.deltaWT = 1);
    }
    if (tinyWT === 3 && wtToday >= 20 && wtToday < 50) {
      this.deltaWT = 2;
    }
    if (tinyWT === 4 && wtToday < 25) {
      this.deltaWT = 5;
    }

    if (tinyWT === 4 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 5;
    }

    if (tinyWT === 2 && wtToday < 25) {
      this.deltaWT = 5;
    }

    if (tinyWT === 2 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 5;
    }
    if (wtToday >= 50 && wtToday < 100) {
      this.deltaWT = 5;
    }
    if (wtToday >= 100 && wtToday < 200) {
      this.deltaWT = 10;
    }
    if (wtToday >= 200 && wtToday < 400) {
      this.deltaWT = 20;
    }
    if (wtToday >= 400 && wtToday < 600) {
      this.deltaWT = 30;
    }
    if (wtToday >= 600) {
      this.deltaWT = 50;
    }

    this.maxReps = Math.floor(((((wtToday) + (this.deltaWT)) * (35 + (lowReps1))) / (wtToday / 1)) - 35);

    if (repsToday >= this.maxReps) {
      this.WT = wtToday + this.deltaWT;
      this.warmupWT = Math.floor((.6 * this.WT) - ((.6 * this.WT) % 5));
      this.minReps = Math.floor(((wtToday * (34 + repsToday / 1 + 1) / this.WT) - 34));
      if (this.minReps <= 0) {
        this.minReps = 0;
      }
      if (this.minReps > this.maxReps) {
        this.minReps = this.maxReps;
      }
    }
    else {
      this.WT = wtToday;
      this.warmupWT = Math.floor((.6 * this.WT) - ((.6 * this.WT) % 5));
      this.minReps = Math.floor(((wtToday * (34 + repsToday / 1 + 1) / this.WT) - 34));
      if (this.minReps <= 0) {
        this.minReps = 0;
      }
    }


    this.oneRMToday = Math.floor((wtToday / 1) * ((34 / 35) + (repsToday / 35)));
    this.percentRM = Math.floor((100 * 35) / (34 + repsToday / 1));

    addDoc(collection(this.db, 'altcurlFour'), {
      repsToday,
      wtToday,
      lowReps1,
      oneRMToday: Number(this.oneRMToday),
      percentRM: Number(this.percentRM),
      dateToday: serverTimestamp(),

      WT: Number(this.WT),
      warmupWT: Number(this.warmupWT),
      deltaWT: Number(this.deltaWT),
      minReps: Number(this.minReps),
      maxReps: Number(this.maxReps),
    }) .then(newWorkoutFourRef => {
      console.log(newWorkoutFourRef.id);
    })
    .catch(error => {
      console.log(error);
    });
  }



  async createWorkoutFive(
    repsToday: number,
    wtToday: number,
    lowReps1: number,
    tinyWT: number,
  ): Promise<any> {


    if (tinyWT === 1 && wtToday < 25) {
      this.deltaWT = (this.deltaWT = 1.25);
    }
    if (tinyWT === 1 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 2.5;
    }
    if (tinyWT === 3 && wtToday < 20) {
      this.deltaWT = (this.deltaWT = 1);
    }
    if (tinyWT === 3 && wtToday >= 20 && wtToday < 50) {
      this.deltaWT = 2;
    }
    if (tinyWT === 4 && wtToday < 25) {
      this.deltaWT = 5;
    }

    if (tinyWT === 4 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 5;
    }

    if (tinyWT === 2 && wtToday < 25) {
      this.deltaWT = 5;
    }

    if (tinyWT === 2 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 5;
    }
    if (wtToday >= 50 && wtToday < 100) {
      this.deltaWT = 5;
    }
    if (wtToday >= 100 && wtToday < 200) {
      this.deltaWT = 10;
    }
    if (wtToday >= 200 && wtToday < 400) {
      this.deltaWT = 20;
    }
    if (wtToday >= 400 && wtToday < 600) {
      this.deltaWT = 30;
    }
    if (wtToday >= 600) {
      this.deltaWT = 50;
    }


    this.maxReps = Math.floor(((((wtToday) + (this.deltaWT)) * (35 + (lowReps1))) / (wtToday / 1)) - 35);

    if (repsToday >= this.maxReps) {
      this.WT = wtToday + this.deltaWT;
      this.warmupWT = Math.floor((.6 * this.WT) - ((.6 * this.WT) % 5));
      this.minReps = Math.floor(((wtToday * (34 + repsToday / 1 + 1) / this.WT) - 34));
      if (this.minReps <= 0) {
        this.minReps = 0;
      }
      if (this.minReps > this.maxReps) {
        this.minReps = this.maxReps;
      }
    }
    else {
      this.WT = wtToday;
      this.warmupWT = Math.floor((.6 * this.WT) - ((.6 * this.WT) % 5));
      this.minReps = Math.floor(((wtToday * (34 + repsToday / 1 + 1) / this.WT) - 34));
      if (this.minReps <= 0) {
        this.minReps = 0;
      }
    }


    this.oneRMToday = Math.floor((wtToday / 1) * ((34 / 35) + (repsToday / 35)));
    this.percentRM = Math.floor((100 * 35) / (34 + repsToday / 1));

    addDoc(collection(this.db, 'altcurlFive'), {
      repsToday,
      wtToday,
      lowReps1,
      oneRMToday: Number(this.oneRMToday),
      percentRM: Number(this.percentRM),
      dateToday: serverTimestamp(),

      WT: Number(this.WT),
      warmupWT: Number(this.warmupWT),
      deltaWT: Number(this.deltaWT),
      minReps: Number(this.minReps),
      maxReps: Number(this.maxReps),
    }) .then(newWorkoutFiveRef => {
      console.log(newWorkoutFiveRef.id);
    })
    .catch(error => {
      console.log(error);
    });
  }

  async createWorkoutSix(
    repsToday: number,
    wtToday: number,
    lowReps1: number,
    tinyWT: number,
  ): Promise<any> {


    if (tinyWT === 1 && wtToday < 25) {
      this.deltaWT = (this.deltaWT = 1.25);
    }
    if (tinyWT === 1 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 2.5;
    }
    if (tinyWT === 3 && wtToday < 20) {
      this.deltaWT = (this.deltaWT = 1);
    }
    if (tinyWT === 3 && wtToday >= 20 && wtToday < 50) {
      this.deltaWT = 2;
    }
    if (tinyWT === 4 && wtToday < 25) {
      this.deltaWT = 5;
    }

    if (tinyWT === 4 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 5;
    }

    if (tinyWT === 2 && wtToday < 25) {
      this.deltaWT = 5;
    }

    if (tinyWT === 2 && wtToday >= 25 && wtToday < 50) {
      this.deltaWT = 5;
    }
    if (wtToday >= 50 && wtToday < 100) {
      this.deltaWT = 5;
    }
    if (wtToday >= 100 && wtToday < 200) {
      this.deltaWT = 10;
    }
    if (wtToday >= 200 && wtToday < 400) {
      this.deltaWT = 20;
    }
    if (wtToday >= 400 && wtToday < 600) {
      this.deltaWT = 30;
    }
    if (wtToday >= 600) {
      this.deltaWT = 50;
    }


    this.maxReps = Math.floor(((((wtToday) + (this.deltaWT)) * (35 + (lowReps1))) / (wtToday / 1)) - 35);

    if (repsToday >= this.maxReps) {
      this.WT = wtToday + this.deltaWT;
      this.warmupWT = Math.floor((.6 * this.WT) - ((.6 * this.WT) % 5));
      this.minReps = Math.floor(((wtToday * (34 + repsToday / 1 + 1) / this.WT) - 34));
      if (this.minReps <= 0) {
        this.minReps = 0;
      }
      if (this.minReps > this.maxReps) {
        this.minReps = this.maxReps;
      }
    }
    else {
      this.WT = wtToday;
      this.warmupWT = Math.floor((.6 * this.WT) - ((.6 * this.WT) % 5));
      this.minReps = Math.floor(((wtToday * (34 + repsToday / 1 + 1) / this.WT) - 34));
      if (this.minReps <= 0) {
        this.minReps = 0;
      }
    }



    this.oneRMToday = Math.floor((wtToday / 1) * ((34 / 35) + (repsToday / 35)));
    this.percentRM = Math.floor((100 * 35) / (34 + repsToday / 1 / 1));

    addDoc(collection(this.db, 'altcurlSix'), {
      repsToday,
      wtToday,
      lowReps1,
      oneRMToday: Number(this.oneRMToday),
      percentRM: Number(this.percentRM),
      dateToday: serverTimestamp(),

      WT: Number(this.WT),
      warmupWT: Number(this.warmupWT),
      deltaWT: Number(this.deltaWT),
      minReps: Number(this.minReps),
      maxReps: Number(this.maxReps),
    }) .then(newWorkoutSixRef => {
      console.log(newWorkoutSixRef.id);
    })
    .catch(error => {
      console.log(error);
    });
  }

  async createOneSets(
    ): Promise<any> {

      addDoc(collection(this.db, 'workout'), {
        exerName: `Alternate Curl (biceps)`,
        currentDate: this.currentDate,
        dateToday: serverTimestamp(),
        sets: '1',
      }) .then(newWorkoutOneRef => {
        console.log(newWorkoutOneRef.id);
      })
      .catch(error => {
        console.log(error);
      });
    }

  async createTwoSets(
  ): Promise<any> {
    addDoc(collection(this.db, 'workout'), {
      exerName: `Alternate Curl (biceps)`,
      currentDate: this.currentDate,
      dateToday: serverTimestamp(),
      sets: '2',
    }) .then(newWorkoutTwoRef => {
      console.log(newWorkoutTwoRef.id);
    })
    .catch(error => {
      console.log(error);
    });
  }

  async createThreeSets(
  ): Promise<any> {

    addDoc(collection(this.db, 'workout'), {
      exerName: `Alternate Curl (biceps)`,
      currentDate: this.currentDate,
      dateToday: serverTimestamp(),
      sets: '3',
    }) .then(newWorkoutThreeRef => {
      console.log(newWorkoutThreeRef.id);
    })
    .catch(error => {
      console.log(error);
    });
  }
  async createFourSets(
  ): Promise<any> {

    addDoc(collection(this.db, 'workout'), {
      exerName: `Alternate Curl (biceps)`,
      currentDate: this.currentDate,
      dateToday: serverTimestamp(),
      sets: '4',
    }) .then(newWorkoutFourRef => {
      console.log(newWorkoutFourRef.id);
    })
    .catch(error => {
      console.log(error);
    });
  }

  async createFiveSets(
  ): Promise<any> {

    addDoc(collection(this.db, 'workout'), {
      exerName: `Alternate Curl (biceps)`,
      currentDate: this.currentDate,
      dateToday: serverTimestamp(),
      sets: '5',
    }) .then(newWorkoutFiveRef => {
      console.log(newWorkoutFiveRef.id);
    })
    .catch(error => {
      console.log(error);
    });
  }
  async createSixSets(
  ): Promise<any> {

    addDoc(collection(this.db, 'workout'), {
      exerName: `Alternate Curl (biceps)`,
      currentDate: this.currentDate,
      dateToday: serverTimestamp(),
      sets: '6',
    }) .then(newWorkoutSixRef => {
      console.log(newWorkoutSixRef.id);
    })
    .catch(error => {
      console.log(error);
    });
  }



  // async createThreeSets(
  // ): Promise<any> {
  //   const newThreeSetsRef: firebase.firestore.DocumentReference = await this.workout.add({});
  //   return newThreeSetsRef.update({
  //     exerName: `Alternate Curl (biceps)`,
  //     currentDate: this.currentDate,
  //     dateToday: firebase.firestore.FieldValue.serverTimestamp(),
  //     sets: '3',
  //   });
  // }
  // async createFourSets(
  // ): Promise<any> {
  //   const newFourSetsRef: firebase.firestore.DocumentReference = await this.workout.add({});
  //   return newFourSetsRef.update({
  //     exerName: `Alternate Curl (biceps)`,
  //     currentDate: this.currentDate,
  //     dateToday: firebase.firestore.FieldValue.serverTimestamp(),
  //     sets: '4',
  //   });
  // }
  // async createFiveSets(
  // ): Promise<any> {
  //   const newFiveSetsRef: firebase.firestore.DocumentReference = await this.workout.add({});
  //   return newFiveSetsRef.update({
  //     exerName: `Alternate Curl (biceps)`,
  //     currentDate: this.currentDate,
  //     dateToday: firebase.firestore.FieldValue.serverTimestamp(),
  //     sets: '5',
  //   });
  // }
  // async createSixSets(

  // ): Promise<any> {
  //   const newSixSetsRef: firebase.firestore.DocumentReference = await this.workout.add({});
  //   return newSixSetsRef.update({
  //     exerName: `Alternate Curl (biceps)`,
  //     currentDate: this.currentDate,
  //     dateToday: serverTimestamp(),
  //     sets: '6',
  //   });
  // }

}
