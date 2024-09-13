import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OhwristcurlhistPageRoutingModule } from './ohwristcurlhist-routing.module';

import { OhwristcurlhistPage } from './ohwristcurlhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OhwristcurlhistPageRoutingModule
  ],
  declarations: [OhwristcurlhistPage]
})
export class OhwristcurlhistPageModule {}
