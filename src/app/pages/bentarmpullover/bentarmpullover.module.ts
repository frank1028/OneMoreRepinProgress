import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BentarmpulloverPageRoutingModule } from './bentarmpullover-routing.module';

import { BentarmpulloverPage } from './bentarmpullover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BentarmpulloverPageRoutingModule
  ],
  declarations: [BentarmpulloverPage]
})
export class BentarmpulloverPageModule {}
