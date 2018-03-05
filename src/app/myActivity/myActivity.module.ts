import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { MyActivityPage } from './myActivity';
import { DataService } from '../core/data.service'

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(MyActivityPage)
  ],
  declarations: [
    MyActivityPage
  ],
  entryComponents: [
    MyActivityPage
  ]
})
export class MyActivityPageModule { }
