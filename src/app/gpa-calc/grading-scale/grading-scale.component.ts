import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GpaCalcComponent } from '../gpa-calc.component';

@Component({
  selector: 'app-grading-scale',
  standalone: true,
  imports: [],
  templateUrl: './grading-scale.component.html',
  styleUrl: './grading-scale.component.css'
})
export class GradingScaleComponent implements AfterViewInit{
  @ViewChild(GpaCalcComponent) gpaCalcComponent!: GpaCalcComponent;

  callToggleGradingScale(){
    // if(this.gpaCalcComponent) {
    //   this.gpaCalcComponent.toggleGradingScale();
    // }

    this.gpaCalcComponent.showGradingScale = false;
  }

  ngAfterViewInit(){

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
