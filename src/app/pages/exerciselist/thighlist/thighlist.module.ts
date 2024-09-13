import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThighlistPageRoutingModule } from './thighlist-routing.module';

import { ThighlistPage } from './thighlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThighlistPageRoutingModule
  ],
  declarations: [ThighlistPage]
})
export class ThighlistPageModule {}
