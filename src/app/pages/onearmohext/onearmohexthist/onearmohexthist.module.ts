import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnearmohexthistPageRoutingModule } from './onearmohexthist-routing.module';

import { OnearmohexthistPage } from './onearmohexthist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnearmohexthistPageRoutingModule
  ],
  declarations: [OnearmohexthistPage]
})
export class OnearmohexthistPageModule {}
