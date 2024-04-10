// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-gpa-auto',
//   standalone: true,
//   imports: [],
//   templateUrl: './gpa-auto.component.html',
//   styleUrl: './gpa-auto.component.css'
// })
// export class GpaAutoComponent {
//   accessToken: string = '';

//   ngOnInit() {
//     const fragment = window.location.hash.substring(1);
//     const params = new URLSearchParams(fragment);
//     this.accessToken = params.get('access_token') || 'no access token found';
//     console.log(this.accessToken);
//   }
// }

import { Component, OnInit } from '@angular/core';

declare var gapi: any; // Add this line to declare the gapi variable

@Component({
  selector: 'app-gpa-auto',
  //standalone: true,
  //imports: [],
  templateUrl: './gpa-auto.component.html',
  styleUrls: ['./gpa-auto.component.css']
})
export class GpaAutoComponent implements OnInit {
  accessToken: string = '';
  courses: any[] = []; 


  ngOnInit() {
    const fragment = window.location.hash.substring(1);
    const params = new URLSearchParams(fragment);
    this.accessToken = params.get('access_token') || 'no access token found';

    // Load the Classroom API client library and set the access token
    gapi.load('client:auth2', () => {
      gapi.client.setToken({access_token: this.accessToken});
      gapi.client.load('https://classroom.googleapis.com/$discovery/rest?version=v1')
        .then(() => {
          // List the courses
          gapi.client.classroom.courses.list()
            .then((response: any) => {
              this.courses = response.result.courses; // Save the courses to display in the template
              console.log(response.result.courses);
            });
        });
    });
  }
}
