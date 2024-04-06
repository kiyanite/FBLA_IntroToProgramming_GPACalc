import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { GoogleApiService } from './google-api.service';
//import { forwardRef, Inject } from '@angular/core';
import { Injector } from '@angular/core';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    //OAuthModule.forRoot()
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // title = 'GPA_CALC';
  // constructor(private readonly google: GoogleApiService) {}
  //constructor(@Inject(forwardRef(() => GoogleApiService)) private googleApiService: GoogleApiService) {}
  constructor(private injector: Injector) {}

get googleApiService(): GoogleApiService {
  return this.injector.get(GoogleApiService);
}

}
