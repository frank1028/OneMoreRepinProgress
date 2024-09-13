import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosebbcurlhistPageRoutingModule } from './closebbcurlhist-routing.module';

import { ClosebbcurlhistPage } from './closebbcurlhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosebbcurlhistPageRoutingModule
  ],
  declarations: [ClosebbcurlhistPage]
})
export class ClosebbcurlhistPageModule {}
