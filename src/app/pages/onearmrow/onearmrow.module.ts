import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnearmrowPageRoutingModule } from './onearmrow-routing.module';

import { OnearmrowPage } from './onearmrow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnearmrowPageRoutingModule
  ],
  declarations: [OnearmrowPage]
})
export class OnearmrowPageModule {}
