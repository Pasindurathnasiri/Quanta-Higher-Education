import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from './add-user/add-user.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
{path:'add-user',component:AddUserComponent},
{path:'view-user',component:ViewUserComponent},
{path:'',component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
