import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeclinepressPageRoutingModule } from './declinepress-routing.module';

import { DeclinepressPage } from './declinepress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeclinepressPageRoutingModule
  ],
  declarations: [DeclinepressPage]
})
export class DeclinepressPageModule {}
