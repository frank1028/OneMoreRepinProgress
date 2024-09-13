import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegcurlPageRoutingModule } from './legcurl-routing.module';

import { LegcurlPage } from './legcurl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegcurlPageRoutingModule
  ],
  declarations: [LegcurlPage]
})
export class LegcurlPageModule {}
