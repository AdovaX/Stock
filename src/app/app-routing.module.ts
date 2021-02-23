import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { GainersComponent } from './gainers/gainers.component';

const routes: Routes = [{
 path: '' , component: DashboardComponent
},
{
  path : 'Gainers' , component: GainersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
