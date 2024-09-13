import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DbuprightrowPageRoutingModule } from './dbuprightrow-routing.module';

import { DbuprightrowPage } from './dbuprightrow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DbuprightrowPageRoutingModule
  ],
  declarations: [DbuprightrowPage]
})
export class DbuprightrowPageModule {}
