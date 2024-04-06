import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { GoogleApiService } from './google-api.service';
import { BrowserModule } from "@angular/platform-browser";



@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ]
})
export class AppModule {}

@Component({
  selector: 'app-login',
  providers: [GoogleApiService],
  standalone: true,
   imports: [
  //   RouterModule,
  //BrowserModule,
  //HttpClientModule,
  //   // OAuthModule.forRoot()
  ],
   templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'GPA_CALC';

  constructor(private readonly google: GoogleApiService) {}

      //   // Enter an API key from the Google API Console:
      // //   https://console.developers.google.com/apis/credentials
      // apiKey: any = 'AIzaSyDa3xet7cpgTgHEFbk9sYsxM03VCqEN9ok';

      // // Enter a client ID for a web application from the Google API Console:
      // //   https://console.developers.google.com/apis/credentials?project=_
      // // In your API Console project, add a JavaScript origin that corresponds
      // //   to the domain where you will be running the script.
      // clientId: any = 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com';

      // // Enter one or more authorization scopes. Refer to the documentation for
      // // the API or https://developers.google.com/people/v1/how-tos/authorizing
      // // for details.
      // scopes: any = 'profile';

      // authorizeButton: any = document.getElementById('authorize-button');
      // signoutButton: any = document.getElementById('signout-button');
      // content: any = document.getElementById('content');

      // // The discovery JSON object.
      // peopleApiDiscovery: any;

      // handleClientLoad() {
      //   // Load the API client and auth2 library.
      //   var loadGapiClient = new Promise(function(resolve, reject) {
      //     gapi.load('client:auth2', resolve);
      //   });

      //   // Fetch the People API discovery served on local server. You can also
      //   // pack the json as a string to avoid extra network request.
      //   // After this promise is fulfilled, the peopleApiDiscovery variable
      //   // will be set.
      //   // This discovery document is downloaded from
      //   // https://people.googleapis.com/$discovery/rest?version=v1
      //   var fetchPeopleApiDiscovery = fetch('people/people_rest_v1.json').then(
      //       function(resp){
      //     return resp.json();
      //   }).then((json) => {
      //     this.peopleApiDiscovery = json;
      //     return Promise.resolve();
      //   });

      //   // When both the gapi.client is loaded and the discovery JSON object
      //   // is ready, call initClient to start API call.
      //   Promise.all([loadGapiClient, fetchPeopleApiDiscovery]).then(this.initClient);
      // }

      // initClient() {
      //   gapi.client.init({
      //       apiKey: this.apiKey,
      //       discoveryDocs: [this.peopleApiDiscovery],
      //       clientId: this.clientId,
      //       scope: this.scopes
      //   }).then( () => {
      //     // Listen for sign-in state changes.
      //     gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

      //     // Handle the initial sign-in state.
      //     this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

      //     this.authorizeButton.onclick = this.handleAuthClick;
      //     this.signoutButton.onclick = this.handleSignoutClick;
      //   });
      // }

      // updateSigninStatus(isSignedIn: any) {
      //   if (isSignedIn) {
      //     this.authorizeButton.style.display = 'none';
      //     this.signoutButton.style.display = 'block';
      //     this.makeApiCall();
      //   } else {
      //     this.authorizeButton.style.display = 'block';
      //     this.signoutButton.style.display = 'none';
      //   }
      // }

      // handleAuthClick(event: any) {
      //   gapi.auth2.getAuthInstance().signIn();
      // }

      // handleSignoutClick(event: any) {
      //   gapi.auth2.getAuthInstance().signOut();
      // }

      // // Load the API and make an API call.  Display the results on the screen.
      // makeApiCall() {
      //   gapi.client.people.people.get({
      //     resourceName: 'people/me'
      //   }).then((resp: { result: { names: { givenName: any; }[]; }; }) => {
      //     var p = document.createElement('p');
      //     var name = resp.result.names[0].givenName;
      //     p.appendChild(document.createTextNode('Hello, '+name+'!'));
      //     this.content.appendChild(p);
      //   });
      // }
      
}


