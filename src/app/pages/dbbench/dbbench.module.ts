import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DbbenchPageRoutingModule } from './dbbench-routing.module';

import { DbbenchPage } from './dbbench.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DbbenchPageRoutingModule
  ],
  declarations: [DbbenchPage]
})
export class DbbenchPageModule {}
