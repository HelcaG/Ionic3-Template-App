import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { OptionPage } from './option';
import { DataService } from '../core/data.service'

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(OptionPage)
  ],
  declarations: [
    OptionPage
  ],
  entryComponents: [
    OptionPage
  ]
})
export class OptionPageModule { }
