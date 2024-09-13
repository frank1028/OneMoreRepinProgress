import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReversedbcurlhistPageRoutingModule } from './reversedbcurlhist-routing.module';

import { ReversedbcurlhistPage } from './reversedbcurlhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReversedbcurlhistPageRoutingModule
  ],
  declarations: [ReversedbcurlhistPage]
})
export class ReversedbcurlhistPageModule {}
