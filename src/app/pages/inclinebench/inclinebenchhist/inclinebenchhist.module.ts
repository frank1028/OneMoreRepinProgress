import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InclinebenchhistPageRoutingModule } from './inclinebenchhist-routing.module';

import { InclinebenchhistPage } from './inclinebenchhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InclinebenchhistPageRoutingModule
  ],
  declarations: [InclinebenchhistPage]
})
export class InclinebenchhistPageModule {}
