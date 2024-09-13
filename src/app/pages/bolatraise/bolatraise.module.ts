import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolatraisePageRoutingModule } from './bolatraise-routing.module';

import { BolatraisePage } from './bolatraise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BolatraisePageRoutingModule
  ],
  declarations: [BolatraisePage]
})
export class BolatraisePageModule {}
