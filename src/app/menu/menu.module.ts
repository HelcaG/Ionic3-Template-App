import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { MenuPage } from './menu';
import { DataService } from '../core/data.service'

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(MenuPage)
  ],
  declarations: [
    MenuPage
  ],
  entryComponents: [
    MenuPage
  ]
})
export class MenuPageModule { }
