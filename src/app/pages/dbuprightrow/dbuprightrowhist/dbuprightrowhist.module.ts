import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DbuprightrowhistPageRoutingModule } from './dbuprightrowhist-routing.module';

import { DbuprightrowhistPage } from './dbuprightrowhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DbuprightrowhistPageRoutingModule
  ],
  declarations: [DbuprightrowhistPage]
})
export class DbuprightrowhistPageModule {}
