import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AddRecordComponent } from './add-record/add-record.component';

import {NgxPrintModule} from 'ngx-print';
import { ShowRecordsComponent } from './show-records/show-records.component';
import { NgxArcTextModule } from 'ngx-arc-text';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CountComponent } from './count/count.component';
import { PrintPageComponent } from './print-page/print-page.component';
import {NgxPrinterModule} from 'ngx-printer';

@NgModule({
  declarations: [HomePageComponent, AddRecordComponent, ShowRecordsComponent, CountComponent, PrintPageComponent],
  imports: [
    CommonModule,
    NgxPrintModule,
    NgxArcTextModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrinterModule
  ]
})
export class MainModule { }
