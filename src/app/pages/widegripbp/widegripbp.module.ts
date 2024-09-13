import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WidegripbpPageRoutingModule } from './widegripbp-routing.module';

import { WidegripbpPage } from './widegripbp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidegripbpPageRoutingModule
  ],
  declarations: [WidegripbpPage]
})
export class WidegripbpPageModule {}
