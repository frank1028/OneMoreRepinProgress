import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UhwristcurlhistPageRoutingModule } from './uhwristcurlhist-routing.module';

import { UhwristcurlhistPage } from './uhwristcurlhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UhwristcurlhistPageRoutingModule
  ],
  declarations: [UhwristcurlhistPage]
})
export class UhwristcurlhistPageModule {}
