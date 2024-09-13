import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegcurlhistPageRoutingModule } from './legcurlhist-routing.module';

import { LegcurlhistPage } from './legcurlhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegcurlhistPageRoutingModule
  ],
  declarations: [LegcurlhistPage]
})
export class LegcurlhistPageModule {}
