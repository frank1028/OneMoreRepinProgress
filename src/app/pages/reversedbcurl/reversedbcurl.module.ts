import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReversedbcurlPageRoutingModule } from './reversedbcurl-routing.module';

import { ReversedbcurlPage } from './reversedbcurl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReversedbcurlPageRoutingModule
  ],
  declarations: [ReversedbcurlPage]
})
export class ReversedbcurlPageModule {}
