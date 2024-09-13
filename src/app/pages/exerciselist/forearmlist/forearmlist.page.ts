import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController, } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-forearmlist',
  templateUrl: './forearmlist.page.html',
  styleUrls: ['./forearmlist.page.scss'],
})
export class ForearmlistPage  {

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
