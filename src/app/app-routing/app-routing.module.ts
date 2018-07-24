import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { IncrementComponent } from '../increment/increment.component';
import { DecrementComponent } from '../decrement/decrement.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routes: Routes=[
  
  {
    path:'add',
    component:IncrementComponent,
  
  },
  {
    path:'sub',
    component:DecrementComponent,
  
  },


  {
    path:'',
    redirectTo:'/add',
    pathMatch:'full'
  },
];