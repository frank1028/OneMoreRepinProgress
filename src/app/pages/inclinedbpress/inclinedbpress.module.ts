import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InclinedbpressPageRoutingModule } from './inclinedbpress-routing.module';

import { InclinedbpressPage } from './inclinedbpress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InclinedbpressPageRoutingModule
  ],
  declarations: [InclinedbpressPage]
})
export class InclinedbpressPageModule {}
