import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UhpulldownPageRoutingModule } from './uhpulldown-routing.module';

import { UhpulldownPage } from './uhpulldown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UhpulldownPageRoutingModule
  ],
  declarations: [UhpulldownPage]
})
export class UhpulldownPageModule {}
