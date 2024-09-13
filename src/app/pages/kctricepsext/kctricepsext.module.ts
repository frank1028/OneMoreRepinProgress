import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KctricepsextPageRoutingModule } from './kctricepsext-routing.module';

import { KctricepsextPage } from './kctricepsext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KctricepsextPageRoutingModule
  ],
  declarations: [KctricepsextPage]
})
export class KctricepsextPageModule {}
