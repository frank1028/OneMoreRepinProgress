import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DbtricepsextPageRoutingModule } from './dbtricepsext-routing.module';

import { DbtricepsextPage } from './dbtricepsext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DbtricepsextPageRoutingModule
  ],
  declarations: [DbtricepsextPage]
})
export class DbtricepsextPageModule {}
