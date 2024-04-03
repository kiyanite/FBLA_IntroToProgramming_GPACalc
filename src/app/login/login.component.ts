import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgModule, ModuleWithProviders } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    // HttpClientModule,
    // OAuthModule.forRoot()
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // onSuccess(googleUser) {
  //   console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  // }
  // onFailure(error) {
  //   console.log(error);
  // }
  // renderButton() {
  //   gapi.signin2.render('my-signin2', {
  //     'scope': 'profile email',
  //     'width': 240,
  //     'height': 50,
  //     'longtitle': true,
  //     'theme': 'dark',
  //     'onsuccess': onSuccess,
  //     'onfailure': onFailure
  //   });
  // }

  // function(d, s, id) {
  //   var js, gs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) return;
  //   js = d.createElement(s); js.id = id;
  //   js.src = "https://apis.google.com/js/platform.js?onload=renderButton";
  //   gs.parentNode.insertBefore(js, gs);
  // }
  // //(document, 'script', 'google-platform'));
}
