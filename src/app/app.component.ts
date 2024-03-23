import { Component } from '@angular/core';
import { GpaCalcComponent } from './gpa-calc/gpa-calc.component';
import { GradingScaleComponent } from './gpa-calc/grading-scale/grading-scale.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    GpaCalcComponent,
    GradingScaleComponent,
    CommonModule
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
  
  showGradingScale: boolean = false;

  // toggleGradingScale(){
  //   this.showGradingScale = !this.showGradingScale;
  // }

  receiveOpenGS($event: boolean) {
    this.showGradingScale = $event;
  }

  receiveCloseGS($event: boolean) {
    this.showGradingScale = $event;
  }


}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/