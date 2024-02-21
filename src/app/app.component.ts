import { Component } from '@angular/core';
import { GpaCalcComponent } from './gpa-calc/gpa-calc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GpaCalcComponent],
  template: `<main>
  
  <section class="content">
    <app-gpa-calc></app-gpa-calc>
  </section>
</main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GPA_CALC';
  
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/