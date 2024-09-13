import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InclinebenchPageRoutingModule } from './inclinebench-routing.module';

import { InclinebenchPage } from './inclinebench.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InclinebenchPageRoutingModule
  ],
  declarations: [InclinebenchPage]
})
export class InclinebenchPageModule {}
