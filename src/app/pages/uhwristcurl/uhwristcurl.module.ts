import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UhwristcurlPageRoutingModule } from './uhwristcurl-routing.module';

import { UhwristcurlPage } from './uhwristcurl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UhwristcurlPageRoutingModule
  ],
  declarations: [UhwristcurlPage]
})
export class UhwristcurlPageModule {}
