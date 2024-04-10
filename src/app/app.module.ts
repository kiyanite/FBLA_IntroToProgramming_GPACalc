// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from '../app-routing.module';

// import { AppComponent } from './app.component';
// import { GpaCalcComponent } from './gpa-calc/gpa-calc.component';
// import { GradingScaleComponent } from './gpa-calc/grading-scale/grading-scale.component';
// import { LoginComponent } from './login/login.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     GpaCalcComponent,
//     LoginComponent
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })

// export class AppModule { }

// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';

// import { GpaAutoComponent } from './gpa-auto/gpa-auto.component';

// @NgModule({
//   declarations: [
//     GpaAutoComponent
//   ],
//   imports: [
//     CommonModule
//   ],
//   exports: [
//     GpaAutoComponent
//   ]
// })
// export class AppModule { }

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
// import { GpaAutoModule } from './gpa-auto/gpa-auto.module'; // Import GpaAutoModule

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     GpaAutoModule // Add this line
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { GpaAutoModule } from './gpa-auto/gpa-auto.module'; // Import GpaAutoModule

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     GpaAutoModule // Add this line
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GpaAutoModule } from './gpa-auto/gpa-auto.module'; // Import GpaAutoModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GpaAutoModule // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }