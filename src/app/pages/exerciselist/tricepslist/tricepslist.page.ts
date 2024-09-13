import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController, } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-tricepslist',
  templateUrl: './tricepslist.page.html',
  styleUrls: ['./tricepslist.page.scss'],
})
export class TricepslistPage  {

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
