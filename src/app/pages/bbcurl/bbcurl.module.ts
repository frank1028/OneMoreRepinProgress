import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BbcurlPageRoutingModule } from './bbcurl-routing.module';

import { BbcurlPage } from './bbcurl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BbcurlPageRoutingModule
  ],
  declarations: [BbcurlPage]
})
export class BbcurlPageModule {}
