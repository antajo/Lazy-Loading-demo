import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: '**', redirectTo: 'first' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SecondComponent, FirstComponent]
})
export class EmployeeModule { }
