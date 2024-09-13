import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosegripbpPageRoutingModule } from './closegripbp-routing.module';

import { ClosegripbpPage } from './closegripbp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosegripbpPageRoutingModule
  ],
  declarations: [ClosegripbpPage]
})
export class ClosegripbpPageModule {}
