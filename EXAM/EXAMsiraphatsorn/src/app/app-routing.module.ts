import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {CreateHotelComponent} from './home/create-hotel/create-hotel.component';

import { HomeComponent} from './home/home.component';


const routes:Routes=[
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'create-hotel',component:CreateHotelComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }