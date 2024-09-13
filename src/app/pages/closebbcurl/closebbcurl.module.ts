import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosebbcurlPageRoutingModule } from './closebbcurl-routing.module';

import { ClosebbcurlPage } from './closebbcurl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosebbcurlPageRoutingModule
  ],
  declarations: [ClosebbcurlPage]
})
export class ClosebbcurlPageModule {}
