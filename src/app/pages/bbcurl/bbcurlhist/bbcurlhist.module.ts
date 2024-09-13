import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BbcurlhistPageRoutingModule } from './bbcurlhist-routing.module';

import { BbcurlhistPage } from './bbcurlhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BbcurlhistPageRoutingModule
  ],
  declarations: [BbcurlhistPage]
})
export class BbcurlhistPageModule {}
