import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatedcalfraisePageRoutingModule } from './seatedcalfraise-routing.module';

import { SeatedcalfraisePage } from './seatedcalfraise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatedcalfraisePageRoutingModule
  ],
  declarations: [SeatedcalfraisePage]
})
export class SeatedcalfraisePageModule {}
