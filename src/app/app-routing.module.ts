import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { comp1Component } from './comp1/comp1.component';
import { comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  {path:'home1', component: comp1Component },
  {path:'home2', component: comp2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
