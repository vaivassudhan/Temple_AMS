import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './modules/main/home-page/home-page.component'
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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
