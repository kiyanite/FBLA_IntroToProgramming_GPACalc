import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { GpaCalcComponent } from "./gpa-calc/gpa-calc.component";
import { LoginComponent } from "./login/login.component";
import { GpaAutoComponent } from "./gpa-auto/gpa-auto.component";
import { LoginErrorComponent } from "./login-error/login-error.component";

export const APP_ROUTES: Routes = [
    // { path: '', redirectTo: '/gpa-calc', pathMatch: 'full' },
    // { path: 'gpa-calc', component: GpaCalcComponent},
    // { path: 'google-classroom/login', component: LoginComponent},
    { path: '', redirectTo: '/gpa-calc', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'gpa-auto', component: GpaAutoComponent },
    { path: 'login-error', component: LoginErrorComponent },
];