import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AddRecordComponent } from './add-record/add-record.component';

import {NgxPrintModule} from 'ngx-print';
import { ShowRecordsComponent } from './show-records/show-records.component';

@NgModule({
  declarations: [HomePageComponent, AddRecordComponent, ShowRecordsComponent],
  imports: [
    CommonModule,
    NgxPrintModule
  ]
})
export class MainModule { }
