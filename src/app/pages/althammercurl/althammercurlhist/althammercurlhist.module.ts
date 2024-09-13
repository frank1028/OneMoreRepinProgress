import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlthammercurlhistPageRoutingModule } from './althammercurlhist-routing.module';

import { AlthammercurlhistPage } from './althammercurlhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlthammercurlhistPageRoutingModule
  ],
  declarations: [AlthammercurlhistPage]
})
export class AlthammercurlhistPageModule {}
