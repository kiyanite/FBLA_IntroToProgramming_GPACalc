import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { OAuthModule } from "angular-oauth2-oidc";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations: [
       LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        OAuthModule.forRoot()
    ],
    providers: [],
    bootstrap: [LoginComponent]
}) 
export class LoginModule { }