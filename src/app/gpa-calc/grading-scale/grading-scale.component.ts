import { Component, ViewChild, AfterViewInit, Output, EventEmitter, Input, NgModule } from '@angular/core';
import { GpaCalcComponent } from '../gpa-calc.component';
import { scales } from '../../scales';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grading-scale',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './grading-scale.component.html',
  styleUrl: './grading-scale.component.css'
})
export class GradingScaleComponent implements AfterViewInit{
  // @ViewChild(GpaCalcComponent) gpaCalcComponent!: GpaCalcComponent;

  // callToggleGradingScale(){
  //   if(this.gpaCalcComponent) {
  //     this.gpaCalcComponent.toggleGradingScale();
  //    }

  //   //this.gpaCalcComponent.showGradingScale = false;
  // }

  ngAfterViewInit(){
    
  }

  @Input() gradingScaleVisible: boolean = true;

  @Output() buttonEvent = new EventEmitter<boolean>();

  @Output() saveEvent = new EventEmitter<any>();

  @Input() scales = [...scales];

  editIndex: number = -1;
  editedItem: any = {};

  constructor(){}

  save() {
    // this.saveChanges(this.editIndex);
    // this.sendScales();
    this.sendCloseGS();
  }

  sendCloseGS() {
    this.gradingScaleVisible = false;
    this.buttonEvent.emit(this.gradingScaleVisible);
  }

  // sendScales() {
  //   this.saveEvent.emit(this.scales);
  // }

  editItem(index: number) {
    this.editIndex = index;
    this.editedItem = { ...this.scales[index] };
  }

  saveChanges(index: number) {
    if (this.editIndex !== -1) {
      this.scales[index] = { ...this.scales[index] };
      this.editIndex = -1;
    }
  }
}

// function showModal(titleHtml: string, contentHtml: string, buttons: { label: string; onClick: Function; triggerClose: boolean; }[]){
//   const modal = document.createElement("div");
  
//   modal.classList.add("modal");
//   modal.innerHTML = `
//   <body> 
//   <div class="modal">
//       <div class="modal__inner">
//           <div class="modal__top">
//               <div class="modal__title"> ${titleHtml} </div>
//               <button class="modal__close" type="button">
//                   <span class="material-icons">close</span>
//               </button>
//           </div>
//           <div class="modal__content">
//                   ${contentHtml}
//           </div>
//           <div class="modal__bottom">

//           </div>
//       </div>
//   </div>
//   </body>
//   `

//   for (const button of buttons) {
//     const element = document.createElement("button");

//     element.setAttribute("type", "button");
//     element.classList.add("modal__button");
//     element.textContent = button.label;
//     element.addEventListener("click", () ==> {
//       if (button.triggerClose) {
//         document.body.removeChild(modal);
//       }

//       button.onClick(modal);
//     })

//     modal.querySelector(".modal__bottom")?.appendChild(element);
//   }

//   document.body.appendChild(modal);
// }

// showModal("Sample Modal Title", "<p>I am the content of this modal</p>", [
//   {
//     label: "Got it!",
//     onClick: modal => {
//       console.log("the button was clicked!");
//     },
//     triggerClose: true
//   }
// ])
