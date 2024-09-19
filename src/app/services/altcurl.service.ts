import { Injectable, inject } from '@angular/core';

import {Firestore,  getDocs, collection,  CollectionReference, query, orderBy, limit, onSnapshot, collectionData, doc, getDoc} from '@angular/fire/firestore';

import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { serverTimestamp} from '@angular/fire/firestore';

import * as firebase from 'firebase/app';
import { getFirestore,  addDoc} from 'firebase/firestore';
import { AlertController, LoadingController } from '@ionic/angular';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';


const db = getFirestore();

@Injectable({
  providedIn: 'root'
})
export class AltcurlService {
  firestore: Firestore = inject(Firestore);
  private colRef: CollectionReference;

  public altcurlOne: any = {};
  public altcurlTwo: any = {};
  public altcurlThree: any = {};
  public altcurlFour: any = {};
  public altcurlFive: any = {};
  public altcurlSix: any = {};

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


  // const altcurlOneRef = collection(this.firestore, "altcurlOne");
  //     this.altcurlOne$ = collectionData(altcurlOneRef), orderBy("dateToday", "desc"), limit(1);

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



  async getAltcurlWarmup() {
    const docRef = collection(this.db, "altcurlWarmup");

    try {

      const q = query(docRef, orderBy("dateToday", "desc"), limit(1));

      const docSnap = (await getDocs(q));

      docSnap.forEach((doc) => {

        const altcurlWarmup = doc.data();
        console.log(altcurlWarmup);

      })
    } catch (err) {
      console.log("getaltcurlWarmup:" + err)
       }
}

 async getAltcurlOne() {


      const db = getFirestore();
      const dbRef = collection(db, "altcurlOne")

      try {

        const q = query(dbRef, orderBy("dateToday", "desc"), limit(1));

        const docSnap = (await getDocs(q));

        docSnap.forEach((doc) => {

          const altcurlOne = doc.data();
          console.log(altcurlOne);

        })
      } catch (err) {
        console.log("getaltcurlOne:" + err)
         }

  }


  async getAltcurlTwo() {
    const db = getFirestore();
    const dbRef = collection(db, "altcurlTwo");

    try {
    const q = query(dbRef, orderBy("dateToday", "desc"), limit(1));

    const docSnap = (await getDocs(q));
    docSnap.forEach((doc) => {
      console.log(doc.data());
    })
  } catch (err) {
    console.log("getaltcurlTwo:" + err)
     }

  }


  async getAltcurlThree() {
    const db = getFirestore();
    const dbRef = collection(db, "altcurlThree");

 try {
    const q = query(dbRef, orderBy("dateToday", "desc"), limit(1));

    const docSnap = (await getDocs(q));
    docSnap.forEach((doc) => {
      console.log(doc.data());
    })
  } catch (err) {
    console.log("getaltcurlThree:" + err)
     }

  }

  async getAltcurlFour() {
    const db = getFirestore();
      const dbRef = collection(db, "altcurlFour")

      try {
        const q = query(dbRef, orderBy("dateToday", "desc"), limit(1));

        const docSnap = (await getDocs(q));
        docSnap.forEach((doc) => {
          console.log(doc.data());
        })
      } catch (err) {
        console.log("getaltcurlFour:" + err)
         }
  }

  async getAltcurlFive() {
  const db = getFirestore();
  const dbRef = collection(db, "altcurlFive")

  try {
    const q = query(dbRef, orderBy("dateToday", "desc"), limit(1));

    const docSnap = (await getDocs(q));
    docSnap.forEach((doc) => {
      console.log(doc.data());
    })
  } catch (err) {
    console.log("getaltcurlFive:" + err)
     }

  }

  async getAltcurlSix() {
  const db = getFirestore();
  const dbRef = collection(db, "altcurlSix")

  try {
    const q = query(dbRef, orderBy("dateToday", "desc"), limit(1));

    const docSnap = (await getDocs(q));
    docSnap.forEach((doc) => {
      console.log(doc.data());
    })
  } catch (err) {
    console.log("getaltcurlSix:" + err)
     }

  }

// WAS:

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
      user: this.auth.currentUser?.uid,
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




addDoc(collection(this.db, 'altcurlOne'), {
      user: this.auth.currentUser?.uid,
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
    .then(newWorkoutOneRef => {
      console.log(newWorkoutOneRef.id);
    })
    .catch(error => {
      console.log(error);
    });
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
      user: this.auth.currentUser?.uid,
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
    })
    .then(newWorkoutTwoRef => {
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
      user: this.auth.currentUser?.uid,
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
      user: this.auth.currentUser?.uid,
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
      user: this.auth.currentUser?.uid,
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
      user: this.auth.currentUser?.uid,
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
        user: this.auth.currentUser?.uid,
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
