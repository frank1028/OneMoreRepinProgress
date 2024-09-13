import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TricepspushdownPageRoutingModule } from './tricepspushdown-routing.module';

import { TricepspushdownPage } from './tricepspushdown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TricepspushdownPageRoutingModule
  ],
  declarations: [TricepspushdownPage]
})
export class TricepspushdownPageModule {}
