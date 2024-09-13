import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BentarmpulloverhistPageRoutingModule } from './bentarmpulloverhist-routing.module';

import { BentarmpulloverhistPage } from './bentarmpulloverhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BentarmpulloverhistPageRoutingModule
  ],
  declarations: [BentarmpulloverhistPage]
})
export class BentarmpulloverhistPageModule {}
