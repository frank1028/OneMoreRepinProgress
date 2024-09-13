import { Component,} from '@angular/core';
import { Platform, LoadingController, } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bicepslist',
  templateUrl: './bicepslist.page.html',
  styleUrls: ['./bicepslist.page.scss'],
  providers: [DatePipe,],
})
export class BicepslistPage  {

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
