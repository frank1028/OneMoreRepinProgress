import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinepulloverhistPageRoutingModule } from './machinepulloverhist-routing.module';

import { MachinepulloverhistPage } from './machinepulloverhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachinepulloverhistPageRoutingModule
  ],
  declarations: [MachinepulloverhistPage]
})
export class MachinepulloverhistPageModule {}
