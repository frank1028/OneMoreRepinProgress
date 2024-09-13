import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegextPageRoutingModule } from './legext-routing.module';

import { LegextPage } from './legext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegextPageRoutingModule
  ],
  declarations: [LegextPage]
})
export class LegextPageModule {}
