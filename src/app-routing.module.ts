// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";
// // import { AppComponent } from "./app/app.component";
// import { GpaCalcComponent } from "./app/gpa-calc/gpa-calc.component";
// import { LoginComponent } from "./app/login/login.component";
// import { LoginErrorComponent } from "./app/login-error/login-error.component";
// import { GpaAutoComponent } from "./app/gpa-auto/gpa-auto.component";


//  const routes: Routes = [
// //     { path: '', redirectTo: '/gpa-calc', pathMatch: 'full' },
// //     { path: 'gpa-calc', component: GpaCalcComponent},
// //     { path: 'google-classroom/login', component: LoginComponent},
//     { path: 'login', component: LoginComponent },
//     { path: 'gpa-auto', component: GpaAutoComponent },
//     { path: 'login-error', component: LoginErrorComponent },
//  ];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })

// export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { AppComponent } from "./app/app.component";
import { LoginComponent } from "./app/login/login.component";
import { GpaCalcComponent } from "./app/gpa-calc/gpa-calc.component";
import { GpaAutoComponent } from "./app/gpa-auto/gpa-auto.component";
import { LoginErrorComponent } from "./app/login-error/login-error.component";

 const routes: Routes = [
//    { path: '', redirectTo: '/gpa-calc', pathMatch: 'full' },
//     { path: 'gpa-calc', component: GpaCalcComponent},
//     { path: 'google-classroom/login', component: LoginComponent},
    { path: '', redirectTo: '/gpa-calc', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'gpa-auto', component: GpaAutoComponent },
    { path: 'login-error', component: LoginErrorComponent },
 ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }