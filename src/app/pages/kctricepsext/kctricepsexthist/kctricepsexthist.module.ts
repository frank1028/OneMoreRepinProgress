import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KctricepsexthistPageRoutingModule } from './kctricepsexthist-routing.module';

import { KctricepsexthistPage } from './kctricepsexthist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KctricepsexthistPageRoutingModule
  ],
  declarations: [KctricepsexthistPage]
})
export class KctricepsexthistPageModule {}
