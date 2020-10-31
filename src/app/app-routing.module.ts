import { LoginLayoutComponent } from './Layouts/login-layout/login-layout.component';
import { TeacherProfileLayoutComponent } from './Layouts/teacher-profile-layout/teacher-profile-layout.component';
import { SubjectLayoutComponent } from './Layouts/subject-layout/subject-layout.component';
import { RegistationLayoutComponent } from './Layouts/registation-layout/registation-layout.component';
import { OnlineTestLayoutComponent } from './Layouts/online-test-layout/online-test-layout.component';
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'login-user', component: LoginLayoutComponent},
  {path: 'subject', component: SubjectLayoutComponent},
  {path: 'teacher-profile', component: TeacherProfileLayoutComponent},
  {path: 'registration-user', component: RegistationLayoutComponent},
  {path: 'online-test', component: OnlineTestLayoutComponent},
  {path: '', component: HomeLayoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
