// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-gpa-auto',
// //   standalone: true,
// //   imports: [],
// //   templateUrl: './gpa-auto.component.html',
// //   styleUrl: './gpa-auto.component.css'
// // })
// // export class GpaAutoComponent {
// //   accessToken: string = '';

// //   ngOnInit() {
// //     const fragment = window.location.hash.substring(1);
// //     const params = new URLSearchParams(fragment);
// //     this.accessToken = params.get('access_token') || 'no access token found';
// //     console.log(this.accessToken);
// //   }
// // }

// import { Component, OnInit } from '@angular/core';

// declare var gapi: any; // Add this line to declare the gapi variable

// @Component({
//   selector: 'app-gpa-auto',
//   //standalone: true,
//   //imports: [],
//   templateUrl: './gpa-auto.component.html',
//   styleUrls: ['./gpa-auto.component.css']
// })
// export class GpaAutoComponent implements OnInit {
//   accessToken: string = '';
//   courses: any[] = []; 


//   ngOnInit() {
//     console.log('ngOnInit is being called');
//     const fragment = window.location.hash.substring(1);
//     const params = new URLSearchParams(fragment);
//     this.accessToken = params.get('access_token') || 'no access token found';

//     // Load the Classroom API client library and set the access token
//     gapi.load('client:auth2', () => {
//       console.log('gapi.load callback is being called');
//       gapi.client.setToken({access_token: this.accessToken});
//       console.log('setToken has been called');
//       gapi.client.load('https://classroom.googleapis.com/$discovery/rest?version=v1')
//         .then(() => {
//           console.log('client.load promise has resolved');
//           // List the courses
//           try {
//             gapi.client.classroom.courses.list()
//               .then((response: any) => {
//                 this.courses = response.result.courses; // Save the courses to display in the template
//                 console.log(response.result.courses);
//               })
//               .catch((error: any) => {
//                 if (error.status === 401) {
//                   console.log('Access token is not valid or has expired');
//                 } else {
//                   console.log('An error occurred:', error);
//                 }
//               });
//           } catch (error) {
//             console.log('An error occurred:', error);
//           }
//         });
//     });
//   }
// }

import { Component, OnInit } from '@angular/core';

declare var gapi: any; // Add this line to declare the gapi variable

@Component({
  selector: 'app-gpa-auto',
  templateUrl: './gpa-auto.component.html',
  styleUrls: ['./gpa-auto.component.css']
})
export class GpaAutoComponent implements OnInit {
  accessToken: string = '';
  courses: any[] = []; 

  ngOnInit() {
    console.log('ngOnInit is being called');
    const fragment = window.location.hash.substring(1);
    const params = new URLSearchParams(fragment);
    this.accessToken = params.get('access_token') || 'no access token found';

    // Load the Classroom API client library and set the access token
    gapi.load('client:auth2', () => {
      console.log('gapi.load callback is being called');
      gapi.client.setToken({access_token: this.accessToken});
      console.log('setToken has been called');
      gapi.client.load('https://classroom.googleapis.com/$discovery/rest?version=v1')
        .then(() => {
          console.log('client.load promise has resolved');
          // List the courses
          gapi.client.classroom.courses.list()
            .then((response: any) => {
              this.courses = response.result.courses; // Save the courses to display in the template
              console.log(response.result.courses);

              // For each course, get the student's submissions (which include the grades)
              this.courses.forEach((course: any) => {
                gapi.client.classroom.courses.courseWork.studentSubmissions.list({courseId: course.id})
                  .then((response: any) => {
                    const grades = response.result.studentSubmissions.map((submission: any) => submission.assignedGrade);
                    console.log('Grades for course ' + course.name + ':', grades);
                    course.grades = grades; // Save the grades to the course object
                  })
                  .catch((error: any) => {
                    console.log('An error occurred while getting the grades:', error);
                  });
              });
            })
            .catch((error: any) => {
              if (error.status === 401) {
                console.log('Access token is not valid or has expired');
              } else {
                console.log('An error occurred:', error);
              }
            });
        });
    });
  }
}
