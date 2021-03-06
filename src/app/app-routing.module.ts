import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultComponent} from './pages/result/result.component';
import {StartComponent} from './pages/start/start.component';
const routes: Routes = [
  { path:'result/:categoryID', component: ResultComponent, data: {animation: 'isRight'}},
  { path:'start', component: StartComponent, data: {animation: 'isLeft'}},
  { path:'', redirectTo: '/start', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
