import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurgeListComponent } from './components/surge/surge-list/surge-list.component';
import { SurgeAddComponent } from './components/surge/surge-add/surge-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SurgeDetailsComponent } from './components/surge/surge-details/surge-details.component';
import { SurgeUpdateComponent } from './components/surge/surge-update/surge-update.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { UserStartComponent } from './components/user/user-start/user-start.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WOKComponent } from './components/wallpaper/wok/wok.component';
import { CustomCursorLightBallComponent } from './components/custom-cursor-light-ball/custom-cursor-light-ball.component';
import { RadiantOrderListComponent } from './components/radiant-order/radiant-order-list/radiant-order-list.component';
import {JwtInterceptorService} from "./services/auth/jwt-interceptor.service";
import {ErrorInterceptorService} from "./services/auth/error-interceptor.service";
import { UserDetailsComponent } from './components/user/user-details/user-details/user-details.component';
import { KRRadiantOrderFormComponent } from "./components/knight-radiant/kr-radiant-order-form/kr-radiant-order-form.component";
import { WokVideoComponent } from './components/wallpaper/wok-video/wok-video.component';
import { WorVideoComponent } from './components/wallpaper/wor-video/wor-video.component';
import { ObVideoComponent } from './components/wallpaper/ob-video/ob-video.component';
import { RowVideoComponent } from './components/wallpaper/row-video/row-video.component';
import {HeaderComponent} from "./components/header/header.component";

const routes : Routes = [
  {path: '', redirectTo:'/knightsRadiant/home', pathMatch:'full'}, // http://localhost:4200/knightsRadiant/home
  {path: 'knightsRadiant/home', component: HomePageComponent}, // http://localhost:4200/knightsRadiant/home
  {path: 'knightsRadiant/user/start', component: UserStartComponent}, // http://localhost:4200/knightsRadiant/users/start
  {path: 'knightsRadiant/user/register', component: UserRegisterComponent}, // http://localhost:4200/knightsRadiant/users/register
  {path: 'knightsRadiant/user/login', component: UserLoginComponent}, // http://localhost:4200/knightsRadiant/users/login
  {path: 'knightsRadiant/user/details', component: UserDetailsComponent}, // http://localhost:4200/knightsRadiant/users/details
  {path: 'knightsRadiant/knight-radiant/radiant-order-form', component: KRRadiantOrderFormComponent}, // http://localhost:4200/knightsRadiant/users/radiant-order-form
  {path: 'knightsRadiant/surges', component: SurgeListComponent}, // http://localhost:4200/knightsRadiant/surges
  {path: 'knightsRadiant/surges/id/:id', component:SurgeDetailsComponent}, // http://localhost:4200/knightsRadiant/surges/id
  {path: 'knightsRadiant/surges/create', component:SurgeAddComponent}, // http://localhost:4200/knightsRadiant/surges/create
  {path: 'knightsRadiant/surges/update/:id', component:SurgeUpdateComponent}, // http://localhost:4200/knightsRadiant/surges/update
  {path: 'knightsRadiant/radiant-orders', component: RadiantOrderListComponent}, // http://localhost:4200/knightsRadiant/radiant-orders

];

@NgModule({
  declarations: [
    AppComponent,
    SurgeListComponent,
    SurgeAddComponent,
    SurgeDetailsComponent,
    SurgeUpdateComponent,
    UserRegisterComponent,
    UserStartComponent,
    UserLoginComponent,
    HomePageComponent,
    WOKComponent,
    CustomCursorLightBallComponent,
    RadiantOrderListComponent,
    UserDetailsComponent,
    KRRadiantOrderFormComponent,
    WokVideoComponent,
    WorVideoComponent,
    ObVideoComponent,
    RowVideoComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes),
        ReactiveFormsModule
    ],
  providers: [
    provideClientHydration(),
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
