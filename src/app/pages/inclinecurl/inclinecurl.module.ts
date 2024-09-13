import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InclinecurlPageRoutingModule } from './inclinecurl-routing.module';

import { InclinecurlPage } from './inclinecurl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InclinecurlPageRoutingModule
  ],
  declarations: [InclinecurlPage]
})
export class InclinecurlPageModule {}
