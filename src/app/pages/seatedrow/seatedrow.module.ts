import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatedrowPageRoutingModule } from './seatedrow-routing.module';

import { SeatedrowPage } from './seatedrow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatedrowPageRoutingModule
  ],
  declarations: [SeatedrowPage]
})
export class SeatedrowPageModule {}
