import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PecdeckPageRoutingModule } from './pecdeck-routing.module';

import { PecdeckPage } from './pecdeck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PecdeckPageRoutingModule
  ],
  declarations: [PecdeckPage]
})
export class PecdeckPageModule {}
