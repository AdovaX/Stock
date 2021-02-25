import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { GainersComponent } from './gainers/gainers.component';
import { LosersComponent } from './losers/losers.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{
  path: '' , component: DashboardComponent
 }, {
  path: 'Home' , component: DashboardComponent
 },
{
  path : 'Gainers' , component: GainersComponent
},
{
  path : 'Losers' , component: LosersComponent
},
{
  path : 'Details' , component: DetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
