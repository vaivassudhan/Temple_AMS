import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import { AddRecordComponent } from './add-record/add-record.component';
import { PrintPageComponent } from './print-page/print-page.component';
import {PrintRangeComponent} from './print-range/print-range.component'
import { ReminderManagementComponent } from './reminder-management/reminder-management.component';
const routes: Routes = [
    {
      path: 'home',
      component: HomePageComponent
    },
    {
      path:'add',
      component:AddRecordComponent
    },
    {
      path:'remind',
      component:ReminderManagementComponent
    },
    {
      path:'printrange',
      component:PrintRangeComponent
    }
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrievanceRoutingModule { }