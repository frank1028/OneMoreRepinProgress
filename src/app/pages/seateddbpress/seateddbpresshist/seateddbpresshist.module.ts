import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeateddbpresshistPageRoutingModule } from './seateddbpresshist-routing.module';

import { SeateddbpresshistPage } from './seateddbpresshist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeateddbpresshistPageRoutingModule
  ],
  declarations: [SeateddbpresshistPage]
})
export class SeateddbpresshistPageModule {}
