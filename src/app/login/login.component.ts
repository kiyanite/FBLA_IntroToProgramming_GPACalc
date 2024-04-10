import { Component } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Replace these with your actual client ID and redirect URI
  CLIENT_ID = '363481054949-rdjqegcv16p0d37jhcthqnf82b7s5gho.apps.googleusercontent.com';
  REDIRECT_URI = 'http://localhost:4200/gpa-auto';

  loginWithImplicitGrant() {
    let authUrl = 'https://accounts.google.com/o/oauth2/v2/auth' +
      '?response_type=token' +
      '&client_id=' + encodeURIComponent(this.CLIENT_ID) +
      '&redirect_uri=' + encodeURIComponent(this.REDIRECT_URI) +
      '&scope=' + encodeURIComponent('https://www.googleapis.com/auth/classroom.courses.readonly');

    window.location.href = authUrl;
  }
}
// }