import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatedlegcurlhistPageRoutingModule } from './seatedlegcurlhist-routing.module';

import { SeatedlegcurlhistPage } from './seatedlegcurlhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatedlegcurlhistPageRoutingModule
  ],
  declarations: [SeatedlegcurlhistPage]
})
export class SeatedlegcurlhistPageModule {}
