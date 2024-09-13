import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController, } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-chestlist',
  templateUrl: './chestlist.page.html',
  styleUrls: ['./chestlist.page.scss'],
})
export class ChestlistPage {

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
