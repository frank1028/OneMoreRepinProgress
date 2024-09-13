import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AltcurlService } from '../../services/altcurl.service';
import { AltcurlnotesService } from 'src/app/services/altcurlnotes.service';
import { Router } from '@angular/router';
import { Observable, Subscribable } from 'rxjs';
import { CollectionReference, Firestore, collection, collectionData, getDocs, getFirestore } from '@angular/fire/firestore';
import { AlertController, NavController, LoadingController, Platform, IonContent } from '@ionic/angular';
import { Auth, user } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { query, orderBy, limit } from "firebase/firestore";


export interface Altcurl {
  $key?: string;
  setsToday: number;
  dateToday: string;
  wtToday: number;
  repsToday: number;
  oneRMToday: any;
  nochangeRepsWT: number;
  newGoalSets: number;
  oneRMGoal: number;
  percentRM: number;
}

@Component({
  selector: 'app-altcurl',
  templateUrl: './altcurl.page.html',
  styleUrls: ['./altcurl.page.scss'],
  providers: [DatePipe,],
})
export class AltcurlPage implements OnInit  {
  firestore: Firestore = inject(Firestore);
  private colRef: CollectionReference;
  workout$: Observable<any[]>;
  // altcurlWarmup$: Observable<any[]>;
  altcurlOne$: Observable<any[]>;
  altcurlTwo$: Observable<any[]>;
  // altcurlThree$: Observable<any[]>;
  // // altcurlFour$: Observable<any>;
  // altcurlFive$: Observable<any[]>;
  // altcurlSix$: Observable<any[]>;
altcurlOne;
altcurlTwo;
altcurlThree;
altcurlFour;
altcurlFive
altcurlSix;

  userId: string;



  addActualForm: FormGroup;
  challengeClicked = false;
  warningClicked = false;
  warmupClicked = true;
  warmupWTClicked = true;

  lastTimeClicked = false;
  latestClicked = false;
  setOneClicked = false;
  twoSetsClicked = false;
  threeSetsClicked = false;
  posnumPattern: any;
  addSetsForm: FormGroup;
  wtToday: number;
  repsToday: number;
  buttonClicked = false;
  setsGoalClicked = false;
  workoutweightClicked = false;
  bestminrepsClicked = false;
  item: any;
  oneRMToday: number;
  percentRM: number;

  dateToday: '';
  exerName: ``;
  currentDate: any = new Date().toLocaleDateString('en-us');
  workoutwarmupClicked: any;

  notesOneClicked = false;
  notesTwoClicked = false;
  notesThreeClicked = false;
  notesFourClicked = false;
  notesFiveClicked = false;
  notesSixClicked = false;

  note: string;

limit: number;


  // AltcurlNotes1Ref$: AngularFirestoreCollection<AltcurlNotes1>;
  // AltcurlNotes1Observable: Observable<AltcurlNotes1[]>;
  // AltcurlNotes2Ref$: AngularFirestoreCollection<AltcurlNotes2>;
  // AltcurlNotes2Observable: Observable<AltcurlNotes2[]>;
  // AltcurlNotes3Ref$: AngularFirestoreCollection<AltcurlNotes3>;
  // AltcurlNotes3Observable: Observable<AltcurlNotes3[]>;
  // AltcurlWarmupRef$: AngularFirestoreCollection<AltcurlWarmup>;
  // AltcurlWarmupObservable: Observable<AltcurlWarmup[]>;

//  AltcurlOneRef$: AngularFirestoreCollection<AltcurlOne>;
//  AltcurlOneObservable: Observable<AltcurlOne[]>;

  // AltcurlTwoRef$: AngularFirestoreCollection<AltcurlTwo>;
  // AltcurlTwoObservable: Observable<AltcurlTwo[]>;
  // AltcurlThreeRef$: AngularFirestoreCollection<AltcurlThree>;
  // AltcurlThreeObservable: Observable<AltcurlThree[]>;
  // AltcurlFourRef$: AngularFirestoreCollection<AltcurlFour>;
  // AltcurlFourObservable: Observable<AltcurlFour[]>;
  // AltcurlFiveRef$: AngularFirestoreCollection<AltcurlFive>;
  // AltcurlFiveObservable: Observable<AltcurlFive[]>;
  // AltcurlSixRef$: AngularFirestoreCollection<AltcurlSix>;
  // AltcurlSixObservable: Observable<AltcurlSix[]>;
  // WorkoutRef$: AngularFirestoreCollection<Workout>;
  // WorkoutObservable: Observable<Workout[]>;

  af: any;
  nextsetClicked: boolean;

  minReps: number;
  lowReps1: number;
  workingweight: number;
  workingweight1: number;
  WT: number;
  showClicked: any;

  workingweightClicked: any;
  lowrepsClicked: any;





  setWTClicked: any;
  minrepsClicked: any;
  bodyweightClicked: any;
  // altcurlWarmup: Observable<any[]>;
  altcurlNotes1: Observable<any[]>;
  altcurlNotes2: Observable<any[]>;
  altcurlNotes3: Observable<any[]>;
  // altcurlwarmup: Observable<any[]>;
  maxReps: any;
  addNotesForm:  FormGroup;
  addWarmupForm: FormGroup;
  threeSetsForm: FormGroup;
  twoSetsForm: FormGroup;
  // altcurlFour: Observable<any[]>;
  // altcurlFive: Observable<any[]>;
  // altcurlSix: Observable<any[]>;
  fourSetsForm: FormGroup;
  fiveSetsForm: FormGroup;
  sixSetsForm: FormGroup;
  fourSetsClicked: boolean;
  fiveSetsClicked: boolean;
  setSixClicked: boolean;
  altcurlNotes4: Observable<any[]>;
  altcurlNotes5: Observable<any[]>;
  altcurlNotes6: Observable<any[]>;
  oneSetsForm: FormGroup;
  sixSetsClicked: any;
  oneSetsClicked: boolean;
  submitAttempt: boolean;
  msg: string;
  tinyWT: number;
  tinyWTClicked: any;
  answer = `NO`;
  answer2 = `NO`;
  tinyClicked: any;
  setthreeClicked: boolean;
  setfourClicked: boolean;
  setfiveClicked: boolean;
  setsixClicked: boolean;
  settwoClicked: boolean;
  notesClicked: any;
  startWTClicked = true;
  startWT: any;
  recomWTClicked: any;
  setoneClicked: boolean;
  msg2: string;
  msg3: number;
  gpBackTwo: any;
  pounds: number;
  kg1: number;
  kg: string;
  lb1: number;
  kgs: number;
  lb: string;
  swapClicked: any;


  altcurlwarmup: any;

  firebase: any;
  collection: any;






  onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
    this.latestClicked = false;
    this.notesClicked = false;
    this.recomWTClicked = false;

  }

  onRecomWTClick() {
    this.recomWTClicked = !this.recomWTClicked;
    this.latestClicked = false;
    this.notesClicked = false;
    this.buttonClicked = false;
  }



  onBestminrepsClick() {
    this.bestminrepsClicked = !this.bestminrepsClicked;
  }

  onShowClick() {
    this.showClicked = !this.showClicked;
  }
  onNextsetClick() {
    this.nextsetClicked = !this.nextsetClicked;
  }

  async onWarmupClick() {

    this.buttonClicked = false;
    this.nextsetClicked = false;
    this.warmupClicked = false;
    this.setOneClicked = false;
    this.twoSetsClicked = false;
    this.threeSetsClicked = false;

    this.warmupClicked = !this.warmupClicked;
    this.presentLoading();
    return this.collection(`/userProfile/${this.userId}/AltcurlWarmup`);
  }

  async oneSetsClick() {
    this.buttonClicked = false;
    this.nextsetClicked = false;
    this.warmupClicked = false;
    this.setOneClicked = true;
    this.twoSetsClicked = false;
    this.threeSetsClicked = false;
    this.fourSetsClicked = false;
    this.fiveSetsClicked = false;
    this.setSixClicked = false;
    this.oneSetsClicked = !this.oneSetsClicked;
    this.msg3 = 1;
    this.presentLoading();

  }
  async twoSetsClick() {
    this.buttonClicked = false;
    this.nextsetClicked = false;
    this.warmupClicked = false;
    this.setOneClicked = false;
    this.twoSetsClicked = false;
    this.threeSetsClicked = false;
    this.fourSetsClicked = false;
    this.fiveSetsClicked = false;
    this.setSixClicked = false;
    this.twoSetsClicked = !this.twoSetsClicked;
    this.msg3 = 2;
    this.presentLoading();




  }
  async threeSetsClick() {
    this.buttonClicked = false;
    this.nextsetClicked = false;
    this.warmupClicked = false;
    this.setOneClicked = false;
    this.twoSetsClicked = false;
    this.threeSetsClicked = false;
    this.fourSetsClicked = false;
    this.fiveSetsClicked = false;
    this.setSixClicked = false;
    this.threeSetsClicked = !this.threeSetsClicked;
    this.msg3 = 3;
    this.presentLoading();


  }

  async fourSetsClick() {

    this.buttonClicked = false;
    this.nextsetClicked = false;
    this.warmupClicked = false;
    this.setOneClicked = false;
    this.twoSetsClicked = false;
    this.threeSetsClicked = false;
    this.fourSetsClicked = false;
    this.fiveSetsClicked = false;
    this.setSixClicked = false;
    this.fourSetsClicked = !this.fourSetsClicked;
    this.msg3 = 4;
    this.presentLoading();


  }

  async fiveSetsClick() {

    this.buttonClicked = false;
    this.nextsetClicked = false;
    this.warmupClicked = false;
    this.oneSetsClicked = false;
    this.twoSetsClicked = false;
    this.threeSetsClicked = false;
    this.fourSetsClicked = false;
    this.fiveSetsClicked = false;
    this.setSixClicked = false;
    this.fiveSetsClicked = !this.fiveSetsClicked;
    this.msg3 = 5;
    this.presentLoading();



  }

  async sixSetsClick() {

    this.buttonClicked = false;
    this.nextsetClicked = false;
    this.warmupClicked = false;
    this.oneSetsClicked = false;
    this.twoSetsClicked = false;
    this.threeSetsClicked = false;
    this.fourSetsClicked = false;
    this.fiveSetsClicked = false;
    this.sixSetsClicked = false;
    this.sixSetsClicked = !this.sixSetsClicked;
    this.msg3 = 6;
    this.presentLoading();


  }


  onnotesOneClick() {
    this.notesOneClicked = !this.notesOneClicked;
    // this.altcurlNotes1 = this.altcurlnotesService.getAltcurlNotes1();
    this.presentLoading();
  }
  onnotesTwoClick() {
    this.notesTwoClicked = !this.notesTwoClicked;
    // this.altcurlNotes2 = this.altcurlnotesService.getAltcurlNotes2();
    this.presentLoading();
  }
  onnotesThreeClick() {
    this.notesThreeClicked = !this.notesThreeClicked;
    // this.altcurlNotes3 = this.altcurlnotesService.getAltcurlNotes3();
    this.presentLoading();
  }
  onnotesFourClick() {
    this.notesFourClicked = !this.notesFourClicked;
    // this.altcurlNotes4 = this.altcurlnotesService.getAltcurlNotes4();
    this.presentLoading();
  }
  onnotesFiveClick() {
    this.notesFiveClicked = !this.notesFiveClicked;
    // this.altcurlNotes5 = this.altcurlnotesService.getAltcurlNotes5();
    this.presentLoading();
  }
  onnotesSixClick() {
    this.notesSixClicked = !this.notesSixClicked;
    // this.altcurlNotes6 = this.altcurlnotesService.getAltcurlNotes6();
    this.presentLoading();
  }

  onStartweightClick() {
    this.startWTClicked = !this.startWTClicked;
    this.startWT = this.altcurlService.getAltcurlOne();
    this.presentLoading();
  }

  @ViewChild(IonContent, { static: false })
  content: IonContent;
  dummyList: any;

  constructor(
    public navCtrl: NavController,
    public altcurlService: AltcurlService,
    public altcurlnotesService: AltcurlnotesService,
    public router: Router,

    public formBuilder: FormBuilder,
    public platform: Platform,
    public datepipe: DatePipe,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public auth: Auth,
    // private firestore: Firestore,
    private location: Location,
  ) {
    this.platform.ready().then(() => {
    });

      this.userId = this.userId;



      const db = getFirestore();



      // this.colRef = collection(this.firestore, `altcurlOne`);

      // this.altcurlOne$ = collectionData(altcurlOneRef);
      // const altcurlOn = query(altcurlOneRef, orderBy("dateToday", "desc"), limit(1));
      // console.log(this.altcurlOne$);

      // const altcurlTwoRef = collection(this.firestore, "altcurlTwo");
      // this.altcurlTwo$ = collectionData(altcurlTwoRef), orderBy("dateToday", "desc"), limit(1);




      // this.altcurlOne$ = collectionData(this.altcurlOne ), orderBy('dateToday', 'desc'), limit(1)

      //const altcurlWarmupRef = collection(this.db, "altcurlWarmup");




      // this.altcurlWarmup = this.altcurlService.getAltcurlWarmup();

      // this.altcurlOne = this.altcurlService.getAltcurlOne();
      // this.altcurlTwo = this.altcurlService.getAltcurlTwo();
      // this.altcurlThree = this.altcurlService.getAltcurlThree();
      // this.altcurlFour = this.altcurlService.getAltcurlFour();
      // this.altcurlFive = this.altcurlService.getAltcurlFive();
      // this.altcurlSix = this.altcurlService.getAltcurlSix();

      // const altcurlOne = collection(this.firestore, 'altcurlOne')
      // this.altcurlOne$ = collectionData(altcurlOne);
      // const altcurlTwo = collection(this.firestore, 'altcurlTwo')
      // this.altcurlTwo$ = collectionData(altcurlTwo), orderBy("dateToday", "desc"), limit(1);
      //  const altcurlThree = collection(this.firestore, 'altcurlThree')
      //  this.altcurlThree$ = collectionData(altcurlThree), orderBy("dateToday", "desc"), limit(1);
      //  const altcurlFour = collection(this.firestore, 'altcurlFour')
      //  this.altcurlFour = collectionData(altcurlFour)
      // const altcurlFive = collection(this.firestore, 'altcurlFive')
      // this.altcurlFive$ = collectionData(altcurlFive), orderBy("dateToday", "desc"), limit(1);
      // const altcurlSix = collection(this.firestore, 'altcurlSix')
      // this.altcurlSix$ = collectionData(altcurlSix), orderBy("dateToday", "desc"), limit(1);


    // this.collection(db, "altcurlOne").subscribe(altcurlOne => {
    //   this.altcurlOne = altcurlOne;
    //   console.log(altcurlOne);
    // });
    // this.collection(db, "altcurlTwo");
    // this.collection(db, "altcurlThree");
    // this.collection(db, "altcurlFour");
    // this.collection(db, "altcurlFive");
    // this.collection(db, "altcurlSix");


  }


  ScrollToTop() {
    this.content.scrollToTop(300);
  }

  onLasttimeClick() {
    const db = getFirestore();
    const altcurlOneS = this.altcurlService.getAltcurlOne();
    // this.altcurlWarmup = this.altcurlService.getAltcurlWarmup();
    // const altcurlOne = this.altcurlService.getAltcurlOne();
    // const altcurlTwo = this.altcurlService.getAltcurlTwo();
    // this.altcurlThree = this.altcurlService.getAltcurlThree();
    // this.altcurlFour = this.altcurlService.getAltcurlFour();
    // this.altcurlFive = this.altcurlService.getAltcurlFive()
    // this.altcurlSix = this.altcurlService.getAltcurlSix();
    this.notesClicked = false;
    this.recomWTClicked = false;
    this.buttonClicked = false;

    this.lastTimeClicked = !this.lastTimeClicked;
    this.presentLoading();
  }

  async ngOnInit() {
    this.posnumPattern = '^(\-{0,1}[0-9]{1,3})??(\.[0-9]{0,2})?$';

    this.addWarmupForm = this.formBuilder.group({
      wtToday: ['', Validators.compose([Validators.required, Validators.pattern(this.posnumPattern),])],
      terms: new FormControl(true, Validators.pattern('true'))
    });

    this.oneSetsForm = this.formBuilder.group({
      wtToday: ['', Validators.compose([Validators.required, Validators.pattern(this.posnumPattern), Validators.max(300)])],
      repsToday: ['', Validators.compose([Validators.required, Validators.max(50)])],
      terms: new FormControl(true, Validators.pattern('true'))
    });

    this.twoSetsForm = this.formBuilder.group({
      wtToday: ['', Validators.compose([Validators.required, Validators.pattern(this.posnumPattern), Validators.max(300)])],
      repsToday: ['', [Validators.compose([Validators.required, Validators.max(50)])]],
      terms: new FormControl(true, Validators.pattern('true'))
    });

    this.threeSetsForm = this.formBuilder.group({
      wtToday: ['', Validators.compose([Validators.required, Validators.pattern(this.posnumPattern), Validators.max(300)])],
      repsToday: ['', Validators.compose([Validators.required, Validators.max(50)])],
      terms: new FormControl(true, Validators.pattern('true'))
    });

    this.fourSetsForm = this.formBuilder.group({
      wtToday: ['', Validators.compose([Validators.required, Validators.pattern(this.posnumPattern), Validators.max(300)])],
      repsToday: ['', Validators.compose([Validators.required, Validators.max(50)])],
      terms: new FormControl(true, Validators.pattern('true'))
    });

    this.fiveSetsForm = this.formBuilder.group({
      wtToday: ['', Validators.compose([Validators.required, Validators.pattern(this.posnumPattern), Validators.max(300)])],
      repsToday: ['', Validators.compose([Validators.required, Validators.max(50)])],
      terms: new FormControl(true, Validators.pattern('true'))
    });

    this.sixSetsForm = this.formBuilder.group({
      wtToday: ['', Validators.compose([Validators.required, Validators.pattern(this.posnumPattern), Validators.max(300)])],
      repsToday: ['', Validators.compose([Validators.required, Validators.max(50)])],
      terms: new FormControl(true, Validators.pattern('true'))
    });

    this.addNotesForm = this.formBuilder.group({
      note: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    });



    // const db = getFirestore();
    // const colRef = collection(db, "altcurlOne");
    // const altcurlOne$ = await getDocs(colRef);
    // altcurlOne$.forEach(doc => {
    //   console.log(doc.data());

    //   });







  }


  tinyY() {
    this.tinyWT = 1;
    this.tinyClicked = !this.tinyClicked;
    this.answer = 'YES';

  }
  tinyN() {
    this.tinyWT = 2;
    this.tinyClicked = !this.tinyClicked;
    this.answer = 'NO';
  }
  tinyW() {
    this.tinyWT = 3;
    this.tinyClicked = !this.tinyClicked;
    this.answer2 = 'YES';

  }
  tinyNO() {
    this.tinyWT = 4;
    this.tinyClicked = !this.tinyClicked;
    this.answer2 = 'NO';
  }

  strength() {
    this.lowReps1 = 3;
    this.lowrepsClicked = !this.lowrepsClicked;
    this.bestminrepsClicked = false;
    this.workoutwarmupClicked= true;
    this.showClicked = true;
    this.msg = 'Strength goal:';
    this.msg2 = 'Strength goal: 4-6 sets recommended';

  }
  strengthandmuscle() {
    this.lowReps1 = 6;
    this.lowrepsClicked = !this.lowrepsClicked;
    this.bestminrepsClicked = false;
    this.workoutwarmupClicked= true;
    this.showClicked = true;
    this.msg = 'Strength & muscle goal:';
    this.msg2 = 'Strength & muscle goal: 3-4 sets recommended';
  }
  muscle() {
    this.lowReps1 = 8;
    this.lowrepsClicked = !this.lowrepsClicked;
    this.bestminrepsClicked = false;
    this.workoutwarmupClicked= true;
    this.showClicked = true;
    this.msg = 'Muscle size goal:';
    this.msg2 = 'Muscle size goal: 3 sets recommended';
  }
  muscleandendur() {
    this.lowReps1 = 12;
    this.lowrepsClicked = !this.lowrepsClicked;
    this.bestminrepsClicked = false;
    this.workoutwarmupClicked= true;
    this.showClicked = true;
    this.msg = 'Muscle & endurance goal:';
    this.msg2 = 'Muscle & endurance goal: 3 sets recommended';
  }
  endur() {
    this.lowReps1 = 15;
    this.lowrepsClicked = !this.lowrepsClicked;
    this.bestminrepsClicked = false;
    this.workoutwarmupClicked= true;
    this.showClicked = true;
    this.msg = 'Toning/Endurance goal:';
    this.msg2 = 'Toning/Endurance goal: 3 sets recommended';
  }



  WorkoutWarmup(addWarmupForm: any) {
    this.workoutwarmupClicked = !this.workoutwarmupClicked;
    this.altcurlService
      .createWorkoutWarmup(
        addWarmupForm.value.wtToday,
      );
    this.addWarmupForm.reset();
    this.nextsetClicked = true;
  }
  SkipWarmup() {
    this.workoutwarmupClicked = !this.workoutwarmupClicked;

  }

  WorkoutOne(oneSetsForm: any) {
    this.altcurlService
      .createWorkoutOne(
        oneSetsForm.value.repsToday,
        oneSetsForm.value.wtToday,
        this.lowReps1,
        this.tinyWT,
        this.answer,
        this.answer2,
      );
    this.oneSetsForm.reset();
    this.setoneClicked = true;
  }
  WorkoutTwo(twoSetsForm: any) {
    this.altcurlService
      .createWorkoutTwo(
        twoSetsForm.value.repsToday,
        twoSetsForm.value.wtToday,
        this.lowReps1,
        this.tinyWT,
      );
    this.twoSetsForm.reset();
    this.settwoClicked = true;
  }
  WorkoutThree(threeSetsForm: any) {
    this.altcurlService
      .createWorkoutThree(
        threeSetsForm.value.repsToday,
        threeSetsForm.value.wtToday,
        this.lowReps1,
        this.tinyWT,
      );
    this.threeSetsForm.reset();
    this.setthreeClicked = true;
  }

  WorkoutFour(fourSetsForm: any) {
    this.altcurlService
      .createWorkoutFour(
        fourSetsForm.value.repsToday,
        fourSetsForm.value.wtToday,
        this.lowReps1,
        this.tinyWT,
      );
    this.fourSetsForm.reset();
    this.setfourClicked = true;
  }

  WorkoutFive(fiveSetsForm: any) {
    this.altcurlService
      .createWorkoutFive(
        fiveSetsForm.value.repsToday,
        fiveSetsForm.value.wtToday,
        this.lowReps1,
        this.tinyWT,
      );
    this.fiveSetsForm.reset();
    this.setfiveClicked = true;
  }

  WorkoutSix(sixSetsForm: any) {
    this.altcurlService
      .createWorkoutSix(
        sixSetsForm.value.repsToday,
        sixSetsForm.value.wtToday,
        this.lowReps1,
        this.tinyWT,
      );
    this.sixSetsForm.reset();
    this.setsixClicked = true;
  }

  OneSets() {
    this.currentDate = new Date().toLocaleDateString('en-us');
    this.altcurlService
      .createOneSets(
      );
  }

  TwoSets() {
    this.currentDate = new Date().toLocaleDateString('en-us');
    this.altcurlService
      .createTwoSets(
      );
  }

  ThreeSets() {
    this.currentDate = new Date().toLocaleDateString('en-us');
    this.altcurlService
      .createThreeSets(
      );
  }

  FourSets() {
    this.currentDate = new Date().toLocaleDateString('en-us');
    this.altcurlService
      .createFourSets(
      );
  }

  FiveSets() {
    this.currentDate = new Date().toLocaleDateString('en-us');
    this.altcurlService
      .createFiveSets(
      );
  }

  SixSets() {
    this.currentDate = new Date().toLocaleDateString('en-us');
    this.altcurlService
      .createSixSets(
      );
  }

  AltcurlNotesOne(addNotesForm: any) {
    this.altcurlnotesService
      .createNote1(
        this.addNotesForm.value.note,
      )
      .then(
        () => {
          this.addNotesForm.reset();
        },
        error => {
          console.log(error);
        }
      );
  }
  AltcurlNotesTwo(addNotesForm: any) {
    this.altcurlnotesService
      .createNote2(
        addNotesForm.value.note,
      )
      .then(
        () => {
          this.addNotesForm.reset();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  AltcurlNotesThree(addNotesForm: any) {
    this.altcurlnotesService
      .createNote3(
        addNotesForm.value.note,
      )
      .then(
        () => {
          this.addNotesForm.reset();
        },
        error => {
          console.log(error);
        }
      );
  }

  AltcurlNotesFour(addNotesForm: any) {
    this.altcurlnotesService
      .createNote4(
        addNotesForm.value.note,
      )
      .then(
        () => {
          this.addNotesForm.reset();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  AltcurlNotesFive(addNotesForm: any) {
    this.altcurlnotesService
      .createNote5(
        addNotesForm.value.note,
      )
      .then(
        () => {
          this.addNotesForm.reset();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  AltcurlNotesSix(addNotesForm: any) {
    this.altcurlnotesService
      .createNote6(
        addNotesForm.value.note,
      )
      .then(
        () => {
          this.addNotesForm.reset();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  async myBackButtonOne() {
    const alert = await this.alertCtrl.create({
      header: 'Go to Next Exercise',
      message: 'Are You Sure? If you press NO you will have to enter weight & Reps for last set again',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {

            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.OneSets();
            this.location.back();
          }
        }
      ]
    });
    (await alert).present();
  }
  async myBackButtonTwo() {
    const alert = await this.alertCtrl.create({
      header: 'Go to Next Exercise',
      message: 'Are You Sure? If you press NO you will have to enter weight & Reps for last set again',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {

            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.TwoSets();
            this.location.back();
          }
        }
      ]
    });
    (await alert).present();
  }
  async myBackButtonThree() {
    const alert = await this.alertCtrl.create({
      header: 'Go to Next Exercise',
      message: 'Are You Sure? If you press NO you will have to enter weight & Reps for last set again',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {

            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.ThreeSets();
            this.location.back();
          }
        }
      ]
    });
    (await alert).present();
  }
  async myBackButtonFour() {
    const alert = await this.alertCtrl.create({
      header: 'Go to Next Exercise',
      message: 'Are You Sure? If you press NO you will have to enter weight & Reps for last set again',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {

            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.FourSets();
            this.location.back();
          }
        }
      ]
    });
    (await alert).present();
  }
  async myBackButtonFive() {
    const alert = await this.alertCtrl.create({
      header: 'Go to Next Exercise',
      message: 'Are You Sure? If you press NO you will have to enter weight & Reps for last set again',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {

            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.FiveSets();
            this.location.back();
          }
        }
      ]
    });
    (await alert).present();
  }
  async myBackButtonSix() {
    const alert = await this.alertCtrl.create({
      header: 'Go to Next Exercise',
      message: 'Are You Sure? If you press NO you will have to enter weight & Reps for last set again',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {

            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.SixSets();
            this.location.back();
          }
        }
      ]
    });
    (await alert).present();
  }


  async presentLoading() {
    const loader = this.loadingCtrl.create({
      duration: 300
    });
    (await loader).present();
  }

  async onLatestClick() {
    this.latestClicked = !this.latestClicked;
    this.notesClicked = false;
    this.recomWTClicked = false;
    const db = getFirestore();
    this.buttonClicked = false;




    const altcurlOne$ = this.altcurlService.getAltcurlOne();
    const altcurlTwo = this.altcurlService.getAltcurlTwo();
    const altcurlThree = this.altcurlService.getAltcurlThree();
    this.altcurlFour = this.altcurlService.getAltcurlFour();
    this.altcurlFive = this.altcurlService.getAltcurlFive();
    this.altcurlSix = this.altcurlService.getAltcurlSix();

    // this.altcurlOne = this.altcurlService.getAltcurlOne();
    // this.altcurlTwo = this.altcurlService.getAltcurlTwo();
    // this.altcurlThree = this.altcurlService.getAltcurlThree();
    // this.altcurlFour = this.altcurlService.getAltcurlFour();
    // this.altcurlFive = this.altcurlService.getAltcurlFive();
    // this.altcurlSix = this.altcurlService.getAltcurlSix();
  }

  onnotesClick() {
    this.notesClicked = !this.notesClicked;
    this.latestClicked = false;
    this.recomWTClicked = false;
    this.buttonClicked = false;

  }


  onWorkoutweightClick() {
    this.workoutweightClicked = !this.workoutweightClicked;
    // this.AltcurlThree = this.altcurlService.getAltcurlThree();
    // this.workout = this.altcurlService.getWorkout();
  }
  onWarmupWTClick() {
    this.warmupWTClicked = !this.warmupWTClicked;
    this.altcurlwarmup = this.altcurlService.getAltcurlWarmup();
    // this.altcurlThree = this.altcurlService.getAltcurlThree();
    // this.workout = this.altcurlService.getWorkout();
  }

  swap() {
    this.swapClicked = !this.swapClicked;
  }
  lbTokg() {
    this.kg1 = ((this.pounds / 2.2046) - (this.pounds / 2.2046) % .0567);
    this.kg = this.kg1.toFixed(2);
  }
  kgTolb() {
    this.lb1 =((this.kgs * 2.2046) - (this.kgs * 2.2046) % .125);
    this.lb = this.lb1.toFixed(2);
  }
  async  goBack() {
    const alert = await this.alertCtrl.create({
      header: 'are you finished with this exercise?',
      message: '',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {

            this.location.back();

          }
        }
      ]
    });
    (await alert).present();
  }
}
