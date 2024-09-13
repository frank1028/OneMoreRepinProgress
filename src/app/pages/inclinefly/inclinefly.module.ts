import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InclineflyPageRoutingModule } from './inclinefly-routing.module';

import { InclineflyPage } from './inclinefly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InclineflyPageRoutingModule
  ],
  declarations: [InclineflyPage]
})
export class InclineflyPageModule {}
