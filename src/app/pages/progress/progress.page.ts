import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage {

  constructor(
    public router: Router,
    public alertCtrl: AlertController,
  ) { }


  async  goBack() {
    const alert = this.alertCtrl.create({
      header: 'have you finished checking progress?',
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

            this.router.navigate(['home'])
          }
        }
      ]
    });
    (await alert).present();
  }
}
