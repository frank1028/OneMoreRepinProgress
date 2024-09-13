import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosegripbphistPageRoutingModule } from './closegripbphist-routing.module';

import { ClosegripbphistPage } from './closegripbphist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosegripbphistPageRoutingModule
  ],
  declarations: [ClosegripbphistPage]
})
export class ClosegripbphistPageModule {}
