import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { TeacherProfileLayoutComponent } from './Layouts/teacher-profile-layout/teacher-profile-layout.component';
import { SubjectLayoutComponent } from './Layouts/subject-layout/subject-layout.component';
import { OnlineTestLayoutComponent } from './Layouts/online-test-layout/online-test-layout.component';
import { RegistationLayoutComponent } from './Layouts/registation-layout/registation-layout.component';
import { TopNavBarComponent } from './Reusable-Components/top-nav-bar/top-nav-bar.component';
import { FooterBarComponent } from './Reusable-Components/footer-bar/footer-bar.component';
import { SideNavBarComponent } from './Reusable-Components/side-nav-bar/side-nav-bar.component';
import { LoginLayoutComponent } from './Layouts/login-layout/login-layout.component';
import { HomeHeaderComponent } from './Home-Components/home-header/home-header.component';
import { TeacherProfileSliderComponent } from './Home-Components/teacher-profile-slider/teacher-profile-slider.component';
import { SubjectProfileSliderComponent } from './Home-Components/subject-profile-slider/subject-profile-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    TeacherProfileLayoutComponent,
    SubjectLayoutComponent,
    OnlineTestLayoutComponent,
    RegistationLayoutComponent,
    TopNavBarComponent,
    FooterBarComponent,
    SideNavBarComponent,
    LoginLayoutComponent,
    HomeHeaderComponent,
    TeacherProfileSliderComponent,
    SubjectProfileSliderComponent,

  ],
  imports: [
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
