import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatedrowhistPageRoutingModule } from './seatedrowhist-routing.module';

import { SeatedrowhistPage } from './seatedrowhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatedrowhistPageRoutingModule
  ],
  declarations: [SeatedrowhistPage]
})
export class SeatedrowhistPageModule {}
