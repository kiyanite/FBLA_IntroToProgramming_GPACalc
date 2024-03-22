/* This component defines the variables and functions used for this GPA calculator */
import { scales } from '../scales';
import { BrowserModule, SafeResourceUrl } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, FormArray, Validators } from '@angular/forms';
import { GradingScaleComponent } from './grading-scale/grading-scale.component';


@Component({
  selector: 'app-gpa-calc',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule,
    ReactiveFormsModule,
    GradingScaleComponent
  ],
  templateUrl: './gpa-calc.component.html',
  styleUrl: './gpa-calc.component.css'
})


export class GpaCalcComponent {

  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  // toggleGradingScale()
  // {
  //   this.toggle.emit();
  // }

  // variables in this class
  /* scale table object used for html display */
  scales = [...scales];

  /* boolean variables for the conditions to show or hide FAQ sections */
  showFAQ: boolean = false;
  showQ_1: boolean = false;
  showQ0: boolean = false;
  showQ1: boolean = false;
  showQ2: boolean = false;
  showQ3: boolean = false;
  showQ4: boolean = false;
  showQ5: boolean = false;
  showQ6: boolean = false;
  showQ7: boolean = false;
  showQ8: boolean = false;
  showQ9: boolean = false;
  showGradingScale: boolean = false;



  /* flag to show if the file name or file extension is valid */
  validFileName: boolean = true;
  validFileExtension: boolean = true;

  /* the cumulativeGPA*/
  cumulativeGPA: number = 0;
  cumulativeCredit: string ="0"; 

  /* the grade formats used for this GPA calculator */
  gradeFormat: string = "LETTERS";
  /* the semester title from the user input*/ 
  semesterTitle: string= "";

  /* variables for every course name, grade, percentage grade, credit, and course type from the user input */
  firstCourseName: string = "";
  firstGrade: number = 1;
  firstGradePercent: string = "93";
  firstCredit: string = "0";
  firstType: string = "regular";

  secondCourseName: string = "";
  secondGrade: number = 1;
  secondGradePercent: string = "93";
  secondCredit: string = "0";
  secondType: string = "regular";

  thirdCourseName: string = "";
  thirdGrade: number = 1;
  thirdGradePercent: string = "93";
  thirdCredit: string = "0";
  thirdType: string = "regular";

  fourthCourseName: string = "";
  fourthGrade: number = 1;
  fourthGradePercent: string = "93";
  fourthCredit: string = "0";
  fourthType: string = "regular";

  fifthCourseName: string = "";
  fifthGrade: number = 1;
  fifthGradePercent: string = "93";
  fifthCredit: string = "0";
  fifthType: string = "regular";

  sixthCourseName: string = "";
  sixthGrade: number = 1;
  sixthGradePercent: string = "93";
  sixthCredit: string = "0";
  sixthType: string = "regular";

  seventhCourseName: string = "";
  seventhGrade: number = 1;
  seventhGradePercent: string = "93";
  seventhCredit: string = "0";
  seventhType: string = "regular";

  eighthCourseName: string = "";
  eighthGrade: number = 1;
  eighthGradePercent: string = "93";
  eighthCredit: string = "0";
  eighthType: string = "regular";

  /* the file name and file extension to generate GPA report from the user input */
  saveFileName: string = "";
  saveFileExtension: string = '';

  /* checkbox values for the options to be included in the GPA report from the user input checkboxes */
  checkedCumGPA: boolean = false;
  checkWeightedGPA: boolean = false;
  checkUnweightedGPA: boolean = false;
  checkTotalGPA: boolean = false;
  checkDetailGPA: boolean = false;

  /* flags to indicate the credit is valid, it's integer >=0 */
  validFirstCredit: boolean =  true;
  validSecondCredit: boolean =  true;
  validThirdCredit: boolean =  true;
  validFourthCredit: boolean =  true;
  validFifthCredit: boolean =  true;
  validSixthCredit: boolean =  true;
  validSeventhCredit: boolean =  true;
  validEighthCredit: boolean =  true;

  /* flags to indicate the percentage grade is valie, it's a number >=0*/
  validFirstPercentage: boolean =  true;
  validSecondPercentage: boolean =  true;
  validThirdPercentage: boolean =  true;
  validFourthPercentage: boolean =  true;
  validFifthPercentage: boolean =  true;
  validSixthPercentage: boolean =  true;
  validSeventhPercentage: boolean =  true;
  validEighthPercentage: boolean =  true;

  // functions in this class

  /*validate file name for GPA report */
  validateFileName()
  {
    this.validFileName = true;
    if(this.saveFileName.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validFileName = false;
    }
  }

  /*validate credit is a positve integer for GPA report */
  validateFirstCredit()
  {
    this.validFirstCredit = true;
    if(this.firstCredit.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validFirstCredit = false;
    }
    else
    {
      let number = Number(this.firstCredit);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive integer
        this.validFirstCredit = false;
      }
    }
  }

 /*validate credit is a positve integer for GPA report */
 validateSecondCredit()
 {
   this.validSecondCredit = true;
   if(this.secondCredit.length == 0)
   {
     //do input validation here, if there is empty string, report error on the GUI
     this.validSecondCredit = false;
   }
   else
   {
     let number = Number(this.secondCredit);
     let isInteger = Number.isInteger(number);
     if(!isInteger || (number < 0))
     { // if this is not a positive integer
       this.validSecondCredit = false;
     }
   }
 }

  validateThirdCredit()
  {
    this.validThirdCredit = true;
    if(this.thirdCredit.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validThirdCredit = false;
    }
    else
    {
      let number = Number(this.thirdCredit);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive integer
        this.validThirdCredit = false;
      }
    }
  }
 
  validateFourthCredit()
  {
    this.validFourthCredit = true;
    if(this.fourthCredit.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validFourthCredit = false;
    }
    else
    {
      let number = Number(this.fourthCredit);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive integer
        this.validFourthCredit = false;
      }
    }
  }

  validateFifthCredit()
  {
    this.validFifthCredit = true;
    if(this.fifthCredit.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validFifthCredit = false;
    }
    else
    {
      let number = Number(this.fifthCredit);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive integer
        this.validFifthCredit = false;
      }
    }
  }

  validateSixthCredit()
  {
    this.validSixthCredit = true;
    if(this.sixthCredit.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validSixthCredit = false;
    }
    else
    {
      let number = Number(this.sixthCredit);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive integer
        this.validSixthCredit = false;
      }
    }
  }

  validateSeventhCredit()
  {
    this.validSeventhCredit = true;
    if(this.seventhCredit.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validSeventhCredit = false;
    }
    else
    {
      let number = Number(this.seventhCredit);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive integer
        this.validSeventhCredit = false;
      }
    }
  }

  validateEighthCredit()
  {
    this.validEighthCredit = true;
    if(this.eighthCredit.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validEighthCredit = false;
    }
    else
    {
      let number = Number(this.eighthCredit);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive integer
        this.validEighthCredit = false;
      }
    }
  }

  /*validate percentage grade is valid, it's a number >=0 */
  validateFirstPerentage()
  {
    this.validFirstPercentage = true;
    if(this.firstGradePercent.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validFirstPercentage = false;
    }
    else
    {
      let number = Number(this.firstGradePercent);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive number
        this.validFirstPercentage = false;
      }
    }
  }

  validateSecondPerentage()
  {
    this.validSecondPercentage = true;
    if(this.secondGradePercent.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validSecondPercentage = false;
    }
    else
    {
      let number = Number(this.secondGradePercent);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive number
        this.validSecondPercentage = false;
      }
    }
  }

  validateThirdPerentage()
  {
    this.validThirdPercentage = true;
    if(this.thirdGradePercent.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validThirdPercentage = false;
    }
    else
    {
      let number = Number(this.thirdGradePercent);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive number
        this.validThirdPercentage = false;
      }
    }
  }

  validateFourthPerentage()
  {
    this.validFourthPercentage = true;
    if(this.fourthGradePercent.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validFourthPercentage = false;
    }
    else
    {
      let number = Number(this.fourthGradePercent);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive number
        this.validFourthPercentage = false;
      }
    }
  }

  validateFifthPerentage()
  {
    this.validFifthPercentage = true;
    if(this.fifthGradePercent.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validFifthPercentage = false;
    }
    else
    {
      let number = Number(this.fifthGradePercent);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive number
        this.validFifthPercentage = false;
      }
    }
  }

  validateSixthPerentage()
  {
    this.validSixthPercentage = true;
    if(this.sixthGradePercent.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validSixthPercentage = false;
    }
    else
    {
      let number = Number(this.sixthGradePercent);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive number
        this.validSixthPercentage = false;
      }
    }
  }

  validateSeventhPerentage()
  {
    this.validSeventhPercentage = true;
    if(this.seventhGradePercent.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validSeventhPercentage = false;
    }
    else
    {
      let number = Number(this.seventhGradePercent);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive number
        this.validSeventhPercentage = false;
      }
    }
  }

  validateEighthPerentage()
  {
    this.validEighthPercentage = true;
    if(this.eighthGradePercent.length == 0)
    {
      //do input validation here, if there is empty string, report error on the GUI
      this.validEighthPercentage = false;
    }
    else
    {
      let number = Number(this.eighthGradePercent);
      let isInteger = Number.isInteger(number);
      if(!isInteger || (number < 0))
      { // if this is not a positive number
        this.validEighthPercentage = false;
      }
    }
  }

  /* save the generated GPA report to file*/
  onSaveFile()
  {
    let fileName = this.saveFileName + '.' + this.saveFileExtension;
    let fileContent = this.constructReport();
    const file = new Blob([fileContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = fileName;
    link.click();
    link.remove(); 
  }



/* serach scale table for the letter grade by id number */  
searchScalesById(id: number)
{
  var result = "";
  for (let i = 0; i < scales.length; i++) {
    if(scales[i].id == id)
    {
      result = scales[i].letterGrade;
      console.log ("found!" + i);
    }
  }
  if(result.length ==0)
  {
    console.log("not found!");
  }
  return result;
}



 /* handle button change event, set variable from true to false, or from false to true*/
  changeFAQ()
  {
    this.showFAQ = ! this.showFAQ;
  }

  changeQ_1()
  {
    this.showQ_1 = ! this.showQ_1;
  }

  changeQ0()
  {
    this.showQ0 = ! this.showQ0;
  }

  changeQ1()
  {
    this.showQ1 = ! this.showQ1;
  }

  changeQ2()
  {
    this.showQ2 = ! this.showQ2;
  }

  changeQ3()
  {
    this.showQ3 = ! this.showQ3;
  }

  changeQ4()
  {
    this.showQ4 = ! this.showQ4;
  }

  changeQ5()
  {
    this.showQ5 = ! this.showQ5;
  }

  changeQ6()
  {
    this.showQ6 = ! this.showQ6;
  }

  changeQ7()
  {
    this.showQ7 = ! this.showQ7;
  }
  changeQ8()
  {
    this.showQ8 = ! this.showQ8;
  }

  changeQ9()
  {
    this.showQ9 = ! this.showQ9;
  }

  toggleGradingScale(){
    this.showGradingScale = !this.showGradingScale;
  }

  
  /* construct the content string for the GPA report */
  constructReport()
  {
    // cumulative GPA
    var cumString = "";
    if(this.checkedCumGPA)
    {
      cumString = "Your Cumulative GPA is " + this.cumulativeGPA + ".\n" ;
    }

    // weighted GPA
    var weightedString = "";
    if(this.checkWeightedGPA)
    {
      weightedString = "Your Weighted GPA is " + this.calculateAllGPAWeighted() + ".\n";
    }

    // unweighted GPA
    var unweightedString = "";
    if(this.checkUnweightedGPA)
    {
      unweightedString =  "Your unweighted GPA is " + this.calculateAllGPAUnWeighted() +   ".\n";
    }

    // total GPA
    var totalString = "";
    if(this.checkTotalGPA)
    {
      totalString = "Your total GPA is " + this.calculateTotalGPAUnWeighted()+ ".\n\r";
    }

    // GPA details of each course
    var detailString = "";
    if(this.checkDetailGPA)
    {
      if(this.gradeFormat=='LETTERS')
      {
        detailString = "Below is the table showing the details:\n" +
        "|Course Name  | Grade | Credits | Course Type\n" +
        "|" + this.firstCourseName + " | " + this.searchScalesById(this.firstGrade).toString() + " | " + this.firstCredit.toString() + " | " + this.firstType + " | " + "\n" +
        "|" + this.secondCourseName + " | " + this.searchScalesById(this.secondGrade).toString() + " | " + this.secondCredit.toString() + " | " + this.secondType + " | " + "\n" +
        "|" + this.thirdCourseName + " | " + this.searchScalesById(this.thirdGrade).toString() + " | " + this.thirdCredit.toString() + " | " + this.thirdType + " | " + "\n" +
        "|" + this.fourthCourseName + " | " + this.searchScalesById(this.fourthGrade).toString() + " | " + this.fourthCredit.toString() + " | " + this.fourthType + " | " + "\n" +
        "|" + this.fifthCourseName + " | " + this.searchScalesById(this.fifthGrade).toString() + " | " + this.fifthCredit.toString() + " | " + this.fifthType + " | " + "\n" +
        "|" + this.sixthCourseName + " | " + this.searchScalesById(this.sixthGrade).toString() + " | " + this.sixthCredit.toString() + " | " + this.sixthType + " | " + "\n" +
        "|" + this.seventhCourseName + " | " + this.searchScalesById(this.seventhGrade).toString() + " | " + this.seventhCredit.toString() + " | " + this.seventhType + " | " + "\n" +
        "|" + this.eighthCourseName + " | " + this.searchScalesById(this.eighthGrade).toString() + " | " + this.eighthCredit.toString() + " | " + this.eighthType + " | " + "\n";
      }
      else if(this.gradeFormat=='PERCENTAGE')
      {
        detailString = "Below is the table showing the details:\n" +
        "|Course Name  | Grade | Credits | Course Type\n" +
        "|" + this.firstCourseName + " | " + this.firstGradePercent + " | " + this.firstCredit.toString() + " | " + this.firstType + " | " + "\n" +
        "|" + this.secondCourseName + " | " + this.secondGradePercent + " | " + this.secondCredit.toString() + " | " + this.secondType + " | " + "\n" +
        "|" + this.thirdCourseName + " | " + this.thirdGradePercent + " | " + this.thirdCredit.toString() + " | " + this.thirdType + " | " + "\n" +
        "|" + this.fourthCourseName + " | " + this.fourthGradePercent + " | " + this.fourthCredit.toString() + " | " + this.fourthType + " | " + "\n" +
        "|" + this.fifthCourseName + " | " + this.fifthGradePercent + " | " + this.fifthCredit.toString() + " | " + this.fifthType + " | " + "\n" +
        "|" + this.sixthCourseName + " | " + this.sixthGradePercent+ " | " + this.sixthCredit.toString() + " | " + this.sixthType + " | " + "\n" +
        "|" + this.seventhCourseName + " | " + this.seventhGradePercent + " | " + this.seventhCredit.toString() + " | " + this.seventhType + " | " + "\n" +
        "|" + this.eighthCourseName + " | " + this.eighthGradePercent + " | " + this.eighthCredit.toString() + " | " + this.eighthType + " | " + "\n";
      }
    }

    var result = 
      "This is the automatically generated GPA report for semester \"" + this.semesterTitle + "\"\n" +
      cumString + weightedString + unweightedString + totalString + detailString;  
    return result;
  }
  
  /* calculate the unweighted GPA by the percentage grade*/
  findGradeScoreByPercentageUnweighted(grade: string){
    var result = 0;
    for(var i=0;i<scales.length;i++)
    {
      if(parseInt(grade)>=scales[i].percentGrade)
      {
         result = scales[i].regular;
         break;
      }
    }
    return result;
  }

  /* calculate the unweighted GPA by the letter grade*/
  findGradeScoreUnWeighted(grade: number){
    var currentScale = scales[Math.round(grade)];
    return currentScale.regular;
  }

  /* calculate the unweighted GPA for a single course by the letter grade*/
  calculateSingleGPAUnWeighted(grd: number, credit: string){
    var score = this.findGradeScoreUnWeighted(grd);
    var singleGPA = score * parseInt(credit);
    return singleGPA;
  }

  /* calculate the unweighted GPA for a single course by the percentage grade*/
  calculateSingleGPAUnWeightedPercentage(grd: string, credit: string){
    var score = this.findGradeScoreByPercentageUnweighted(grd);
    var singleGPA = score * parseInt(credit);
    return singleGPA;
  }

/* calculate the unweighted GPA for total courses by the letter grade*/  
calculateTotalGPA(){
  var firstGPA = this.calculateSingleGPAUnWeighted(this.firstGrade, this.firstCredit);
  var secondGPA = this.calculateSingleGPAUnWeighted(this.secondGrade, this.secondCredit);
  var thirdGPA = this.calculateSingleGPAUnWeighted(this.thirdGrade, this.thirdCredit);
  var fourthGPA = this.calculateSingleGPAUnWeighted(this.fourthGrade, this.fourthCredit);
  var fifthGPA = this.calculateSingleGPAUnWeighted(this.fifthGrade, this.fifthCredit);
  var sixthGPA = this.calculateSingleGPAUnWeighted(this.sixthGrade, this.sixthCredit);
  var seventhGPA = this.calculateSingleGPAUnWeighted(this.seventhGrade, this.seventhCredit);
  var eighthGPA = this.calculateSingleGPAUnWeighted(this.eighthGrade, this.eighthCredit);
  return firstGPA + secondGPA + thirdGPA + fourthGPA + fifthGPA + sixthGPA + seventhGPA + eighthGPA;
}

/* calculate the unweighted GPA for total courses by the percentage grade*/
calculateTotalGPAPercentage(){
  var firstGPA = this.calculateSingleGPAUnWeightedPercentage(this.firstGradePercent, this.firstCredit);
  var secondGPA = this.calculateSingleGPAUnWeightedPercentage(this.secondGradePercent, this.secondCredit);
  var thirdGPA = this.calculateSingleGPAUnWeightedPercentage(this.thirdGradePercent, this.thirdCredit);
  var fourthGPA = this.calculateSingleGPAUnWeightedPercentage(this.fourthGradePercent, this.fourthCredit);

  var fifthGPA = this.calculateSingleGPAUnWeightedPercentage(this.fifthGradePercent, this.fifthCredit);
  var sixthGPA = this.calculateSingleGPAUnWeightedPercentage(this.sixthGradePercent, this.sixthCredit);
  var seventhGPA = this.calculateSingleGPAUnWeightedPercentage(this.seventhGradePercent, this.seventhCredit);
  var eighthGPA = this.calculateSingleGPAUnWeightedPercentage(this.eighthGradePercent, this.eighthCredit);
  return firstGPA + secondGPA + thirdGPA + fourthGPA + fifthGPA + sixthGPA + seventhGPA + eighthGPA;
}

/*calculate the unweighted GPA for all the courses
  This function is called in HTML*/
calculateAllGPAUnWeighted(){
 var totalCredits = parseInt(this.firstCredit) + parseInt(this.secondCredit) + parseInt(this.thirdCredit) + parseInt(this.fourthCredit)
 + parseInt(this.fifthCredit) + parseInt(this.sixthCredit) + parseInt(this.seventhCredit) + parseInt(this.eighthCredit);
  var answer = 0;
  if(totalCredits > 0)
  {
    if(this.gradeFormat=='LETTERS')
    {
      answer = this.calculateTotalGPA() / totalCredits;
    }
    else if(this.gradeFormat=='PERCENTAGE')
    {
      answer = this.calculateTotalGPAPercentage() / totalCredits;
    }
  }
  return Math.round(answer*100)/100;
}

/*calculate the unweighted GPA for all the courses, including cumulative GPA.
  This function is called in HTML*/
calculateTotalGPAUnWeighted(){
  var allGrades = this.cumulativeGPA*parseInt(this.cumulativeCredit);
  var totalCredits = parseInt(this.firstCredit) + parseInt(this.secondCredit) + parseInt(this.thirdCredit) + parseInt(this.fourthCredit) 
  + parseInt(this.fifthCredit) + parseInt(this.sixthCredit) + parseInt(this.seventhCredit) + parseInt(this.eighthCredit) + parseInt(this.cumulativeCredit);
  var answer = 0;
  if(totalCredits > 0)
  {
    if(this.gradeFormat=='LETTERS')
    {
      allGrades += this.calculateTotalGPA();
      answer = this.calculateTotalGPA() / totalCredits;
    }
    else if(this.gradeFormat=='PERCENTAGE')
    {
      allGrades += this.calculateTotalGPAPercentage();
      answer = this.calculateTotalGPAPercentage() / totalCredits;
    }
    answer = allGrades / totalCredits;
  }
  return Math.round(answer*100)/100;
}

/* calculate the weighted GPA by the percentage grade*/
findGradeScoreByPercentageWeighted(grade: string, type: string){
  var result = 0;
  for(var i=0;i<scales.length;i++)
  {
    if(parseInt(grade)>=scales[i].percentGrade)
    {
      switch(type) {
        case "regular":
          result = scales[i].regular;
          break;
        case "honors":
          result = scales[i].honors;
          break;
        case "ap":
          result = scales[i].ap;
          break;
        default:
          result = scales[i].regular;
          break;
      }
      break;
    }
  }
  return result;
}

/* calculate the weighted GPA by the grade and course type*/
findGradeScoreWeighted(grade: number, type: string){
  var currentScale = scales[Math.round(grade)];
  var gradeNumber = 0;
  switch (type) {
    case "regular":
      gradeNumber = currentScale.regular;
      break;
    case "honors":
      gradeNumber = currentScale.honors;
      break;
    case "ap":
      gradeNumber = currentScale.ap;
      break;
    default:
      gradeNumber = currentScale.regular;
      break;
    }
  return gradeNumber;
}

/* calculate the weighted GPA for a single course by the grade*/
calculateSingleGPAWeighted(grd: number, type: string, credit: string)
{
  var score =0;
  score = this.findGradeScoreWeighted(grd, type);
  var singleGPA = score * parseInt(credit);
  return singleGPA;
}

/* calculate the weighted GPA for a single course by the percentage grade and course type and credit*/
calculateSingleGPAWeightedPercent(grd: string, type: string, credit: string)
{
  var score =0;
  score = this.findGradeScoreByPercentageWeighted(grd, type);
  var singleGPA = score * parseInt(credit);
  return singleGPA;
}

/* calculate the weighted GPAfor all the courses
  This function is called in html*/
calculateAllGPAWeighted(){
  var firstGPA = 0;
  var secondGPA = 0;
  var thirdGPA = 0;
  var fourthGPA = 0;
  var fifthGPA = 0;
  var sixthGPA = 0;
  var seventhGPA = 0;
  var eighthGPA = 0;
  if(this.gradeFormat=='LETTERS')
  {
    firstGPA = this.calculateSingleGPAWeighted(this.firstGrade, this.firstType, this.firstCredit);
    secondGPA = this.calculateSingleGPAWeighted(this.secondGrade, this.secondType, this.secondCredit);
    thirdGPA = this.calculateSingleGPAWeighted(this.thirdGrade, this.thirdType, this.thirdCredit);
    fourthGPA = this.calculateSingleGPAWeighted(this.fourthGrade, this.fourthType, this.fourthCredit);
    fifthGPA = this.calculateSingleGPAWeighted(this.fifthGrade, this.fifthType, this.fifthCredit);
    sixthGPA = this.calculateSingleGPAWeighted(this.sixthGrade, this.sixthType, this.sixthCredit);
    seventhGPA = this.calculateSingleGPAWeighted(this.seventhGrade, this.seventhType, this.seventhCredit);
    eighthGPA = this.calculateSingleGPAWeighted(this.eighthGrade, this.eighthType, this.eighthCredit);
  }
  else if(this.gradeFormat=='PERCENTAGE')
  {
    firstGPA = this.calculateSingleGPAWeightedPercent(this.firstGradePercent, this.firstType, this.firstCredit);
    secondGPA = this.calculateSingleGPAWeightedPercent(this.secondGradePercent, this.secondType, this.secondCredit);
    thirdGPA = this.calculateSingleGPAWeightedPercent(this.thirdGradePercent, this.thirdType, this.thirdCredit);
    fourthGPA = this.calculateSingleGPAWeightedPercent(this.fourthGradePercent, this.fourthType, this.fourthCredit);
    fifthGPA = this.calculateSingleGPAWeightedPercent(this.fifthGradePercent, this.fifthType, this.fifthCredit);
    sixthGPA = this.calculateSingleGPAWeightedPercent(this.sixthGradePercent, this.sixthType, this.sixthCredit);
    seventhGPA = this.calculateSingleGPAWeightedPercent(this.seventhGradePercent, this.seventhType, this.seventhCredit);
    eighthGPA = this.calculateSingleGPAWeightedPercent(this.eighthGradePercent, this.eighthType, this.eighthCredit);
  }
  var totalCredits = parseInt(this.firstCredit) + parseInt(this.secondCredit) + parseInt(this.thirdCredit) + parseInt(this.fourthCredit)
  + parseInt(this.fifthCredit) + parseInt(this.sixthCredit) + parseInt(this.seventhCredit) + parseInt(this.eighthCredit);
  var answer = 0;
  if(totalCredits > 0)
  {
    answer = (firstGPA + secondGPA + thirdGPA + fourthGPA + fifthGPA + sixthGPA + seventhGPA + eighthGPA) / totalCredits;
  }
  return Math.round(answer*100)/100;
  }
  
  

  // This is the end of function definitions.


}
