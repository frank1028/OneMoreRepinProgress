import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatedcalfraisehistPageRoutingModule } from './seatedcalfraisehist-routing.module';

import { SeatedcalfraisehistPage } from './seatedcalfraisehist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatedcalfraisehistPageRoutingModule
  ],
  declarations: [SeatedcalfraisehistPage]
})
export class SeatedcalfraisehistPageModule {}
