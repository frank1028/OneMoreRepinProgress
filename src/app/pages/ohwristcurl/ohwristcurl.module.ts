import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OhwristcurlPageRoutingModule } from './ohwristcurl-routing.module';

import { OhwristcurlPage } from './ohwristcurl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OhwristcurlPageRoutingModule
  ],
  declarations: [OhwristcurlPage]
})
export class OhwristcurlPageModule {}
