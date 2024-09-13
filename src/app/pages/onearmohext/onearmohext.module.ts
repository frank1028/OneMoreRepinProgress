import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnearmohextPageRoutingModule } from './onearmohext-routing.module';

import { OnearmohextPage } from './onearmohext.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnearmohextPageRoutingModule
  ],
  declarations: [OnearmohextPage]
})
export class OnearmohextPageModule {}
