import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeateddbpressPageRoutingModule } from './seateddbpress-routing.module';

import { SeateddbpressPage } from './seateddbpress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeateddbpressPageRoutingModule
  ],
  declarations: [SeateddbpressPage]
})
export class SeateddbpressPageModule {}
