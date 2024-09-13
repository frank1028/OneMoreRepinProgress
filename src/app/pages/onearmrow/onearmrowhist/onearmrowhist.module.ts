import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnearmrowhistPageRoutingModule } from './onearmrowhist-routing.module';

import { OnearmrowhistPage } from './onearmrowhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnearmrowhistPageRoutingModule
  ],
  declarations: [OnearmrowhistPage]
})
export class OnearmrowhistPageModule {}
