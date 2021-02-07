import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './modules/main/home-page/home-page.component'
import { AddRecordComponent } from './modules/main/add-record/add-record.component';
import { ShowRecordsComponent } from './modules/main/show-records/show-records.component';
import { CountComponent } from './modules/main/count/count.component';
import { PrintPageComponent } from './modules/main/print-page/print-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent, 
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/main/main.module').then(m => m.MainModule)
      },
    ]
  },
  {
    path:'add',
    component:AddRecordComponent
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'count',
    component:CountComponent
  },
  {
    path:'show',
    component:ShowRecordsComponent
  },
  {
    path:'print',
    component:PrintPageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
