import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    HomepageComponent,
    AppComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers:[
    UserService,
    HttpClient,
  ],

  bootstrap: [AppComponent]

})
export class AppModule { }
