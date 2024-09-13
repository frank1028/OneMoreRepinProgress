import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachinepulloverPageRoutingModule } from './machinepullover-routing.module';

import { MachinepulloverPage } from './machinepullover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachinepulloverPageRoutingModule
  ],
  declarations: [MachinepulloverPage]
})
export class MachinepulloverPageModule {}
