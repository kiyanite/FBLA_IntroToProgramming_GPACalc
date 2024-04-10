import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Make sure this line is here
import { GpaAutoComponent } from './gpa-auto.component';

@NgModule({
  declarations: [
    GpaAutoComponent
  ],
  imports: [
    CommonModule // And this line
  ],
  exports: [
    GpaAutoComponent
  ]
})
export class GpaAutoModule { }