import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverheadextPageRoutingModule } from './overheadext-routing.module';

import { OverheadextPage } from './overheadext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverheadextPageRoutingModule
  ],
  declarations: [OverheadextPage]
})
export class OverheadextPageModule {}
