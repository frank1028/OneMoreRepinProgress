import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreachercurlhistPageRoutingModule } from './preachercurlhist-routing.module';

import { PreachercurlhistPage } from './preachercurlhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreachercurlhistPageRoutingModule
  ],
  declarations: [PreachercurlhistPage]
})
export class PreachercurlhistPageModule {}
