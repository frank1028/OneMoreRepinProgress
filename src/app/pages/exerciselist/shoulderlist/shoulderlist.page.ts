import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController, } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-shoulderlist',
  templateUrl: './shoulderlist.page.html',
  styleUrls: ['./shoulderlist.page.scss'],
  providers: [DatePipe, ],
})
export class ShoulderlistPage  {


  constructor(
    public auth: Auth,
    public platform: Platform,
    public loadingCtrl: LoadingController,

  ) {
    this.platform.ready().then(() => {
    });
  }


  async presentLoading() {
    const loader = await this.loadingCtrl.create({
      duration: 300
    });
    loader.present();
  }
}
