import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import {CardComponent} from './components/card/card.component';
import {ResultComponent} from './pages/result/result.component';
const routes: Routes = [
  // { path:'about', component: AboutComponent},
  { path:'start', component: ResultComponent},
  { path:'', redirectTo: '/start', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
