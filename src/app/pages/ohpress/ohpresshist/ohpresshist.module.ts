import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OhpresshistPageRoutingModule } from './ohpresshist-routing.module';

import { OhpresshistPage } from './ohpresshist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OhpresshistPageRoutingModule
  ],
  declarations: [OhpresshistPage]
})
export class OhpresshistPageModule {}
