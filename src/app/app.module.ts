import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdInputModule, MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
