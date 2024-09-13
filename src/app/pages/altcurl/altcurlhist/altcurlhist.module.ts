import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltcurlhistPageRoutingModule } from './altcurlhist-routing.module';

import { AltcurlhistPage } from './altcurlhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltcurlhistPageRoutingModule
  ],
  declarations: [AltcurlhistPage]
})
export class AltcurlhistPageModule {}
