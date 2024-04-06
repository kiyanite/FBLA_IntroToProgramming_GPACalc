import { Component } from '@angular/core';
import { GpaCalcComponent } from './gpa-calc/gpa-calc.component';
import { GradingScaleComponent } from './gpa-calc/grading-scale/grading-scale.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { GoogleApiService } from './google-api.service';
import { NgModule } from "@angular/core";

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ]
})
export class AppModule {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    GpaCalcComponent,
    GradingScaleComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
//   template: `<main>
    
  
//   <section class="content">
//     <app-gpa-calc></app-gpa-calc>
//   </section>
// </main>`,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'GPA_CALC';

 // constructor(private readonly google: GoogleApiService) {}

  // showGradingScale: boolean = false;

  // toggleGradingScale(){
  //   this.showGradingScale = !this.showGradingScale;
  // }

  // receiveOpenGS($event: boolean) {
  //   this.showGradingScale = $event;
  // }

  // receiveCloseGS($event: boolean) {
  //   this.showGradingScale = $event;
  // }


}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/