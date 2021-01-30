import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AddRecordComponent } from './add-record/add-record.component';

import {NgxPrintModule} from 'ngx-print';
import { ShowRecordsComponent } from './show-records/show-records.component';
import { NgxArcTextModule } from 'ngx-arc-text';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CountComponent } from './count/count.component';

@NgModule({
  declarations: [HomePageComponent, AddRecordComponent, ShowRecordsComponent, CountComponent],
  imports: [
    CommonModule,
    NgxPrintModule,
    NgxArcTextModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
