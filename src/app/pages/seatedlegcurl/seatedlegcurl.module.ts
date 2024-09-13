import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatedlegcurlPageRoutingModule } from './seatedlegcurl-routing.module';

import { SeatedlegcurlPage } from './seatedlegcurl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatedlegcurlPageRoutingModule
  ],
  declarations: [SeatedlegcurlPage]
})
export class SeatedlegcurlPageModule {}
