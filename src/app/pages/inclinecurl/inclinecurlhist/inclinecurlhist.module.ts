import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InclinecurlhistPageRoutingModule } from './inclinecurlhist-routing.module';

import { InclinecurlhistPage } from './inclinecurlhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InclinecurlhistPageRoutingModule
  ],
  declarations: [InclinecurlhistPage]
})
export class InclinecurlhistPageModule {}
