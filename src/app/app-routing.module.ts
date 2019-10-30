import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import {ResultComponent} from './pages/result/result.component';
import {StartComponent} from './pages/start/start.component';
import { CategoriesComponent } from './pages/categories/categories.component';
const routes: Routes = [
  { path:'categories/:keyword', component: CategoriesComponent, data: {type: 'keyword'}},
  { path:'filter', component: MainComponent},
  { path:'result/:categoryID', component: ResultComponent},
  { path:'start', component: StartComponent},
  { path:'', redirectTo: '/start', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
