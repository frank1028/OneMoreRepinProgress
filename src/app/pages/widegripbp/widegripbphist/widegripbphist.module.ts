import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WidegripbphistPageRoutingModule } from './widegripbphist-routing.module';

import { WidegripbphistPage } from './widegripbphist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidegripbphistPageRoutingModule
  ],
  declarations: [WidegripbphistPage]
})
export class WidegripbphistPageModule {}
