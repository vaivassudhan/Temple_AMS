import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './modules/main/home-page/home-page.component'
import { AddRecordComponent } from './modules/main/add-record/add-record.component';
import { ShowRecordsComponent } from './modules/main/show-records/show-records.component';

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
    path:'show',
    component:ShowRecordsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
