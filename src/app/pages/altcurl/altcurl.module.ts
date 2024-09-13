import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltcurlPageRoutingModule } from './altcurl-routing.module';

import { AltcurlPage } from './altcurl.page';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    IonicModule,
    AltcurlPageRoutingModule
  ],
  declarations: [AltcurlPage]
})
export class AltcurlPageModule {}
