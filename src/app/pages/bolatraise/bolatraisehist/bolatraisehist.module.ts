import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolatraisehistPageRoutingModule } from './bolatraisehist-routing.module';

import { BolatraisehistPage } from './bolatraisehist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BolatraisehistPageRoutingModule
  ],
  declarations: [BolatraisehistPage]
})
export class BolatraisehistPageModule {}
