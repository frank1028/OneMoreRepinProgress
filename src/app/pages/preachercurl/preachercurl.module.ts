import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreachercurlPageRoutingModule } from './preachercurl-routing.module';

import { PreachercurlPage } from './preachercurl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreachercurlPageRoutingModule
  ],
  declarations: [PreachercurlPage]
})
export class PreachercurlPageModule {}
