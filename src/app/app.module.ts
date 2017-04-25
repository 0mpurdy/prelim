import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdInputModule, MdButtonModule, MdIconModule, MdListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { UserService } from './user/user.service';
import { LoggedInGuard } from './logged-in/logged-in.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './chat/chat.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ShortDatePipe } from './short-date.pipe';
import { ShortNamePipe } from './short-name.pipe';

export const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuard] },
  { path: 'chat/:id', component: ChatComponent, canActivate: [LoggedInGuard] },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignUpComponent,
    DashboardComponent,
    ChatComponent,
    ChatMessageComponent,
    ShortDatePipe,
    ShortNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdListModule
  ],
  providers: [
    UserService,

    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
