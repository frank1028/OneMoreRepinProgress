import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeclinepresshistPageRoutingModule } from './declinepresshist-routing.module';

import { DeclinepresshistPage } from './declinepresshist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeclinepresshistPageRoutingModule
  ],
  declarations: [DeclinepresshistPage]
})
export class DeclinepresshistPageModule {}
