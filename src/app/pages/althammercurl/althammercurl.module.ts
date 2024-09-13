import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlthammercurlPageRoutingModule } from './althammercurl-routing.module';

import { AlthammercurlPage } from './althammercurl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlthammercurlPageRoutingModule
  ],
  declarations: [AlthammercurlPage]
})
export class AlthammercurlPageModule {}
