import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OhpressPageRoutingModule } from './ohpress-routing.module';

import { OhpressPage } from './ohpress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OhpressPageRoutingModule
  ],
  declarations: [OhpressPage]
})
export class OhpressPageModule {}
