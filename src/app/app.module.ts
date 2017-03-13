import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LocalStorageModule } from 'angular-2-local-storage';



import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { InterestComponent } from './interests/interests.component';


import { ChallengeService } from './challenge.service';

import { AuthService } from './auth.service';
import { InterestsService } from './interests.service';
import { ChallengeComponent } from './challenge/challenge.component';
import { InterestChallengeComponent } from './interest-challenge/interest-challenge.component';


// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
    {
    path: 'interest',
    component: InterestComponent
  },
  //  {
  //   path: 'users/:username',
  //   component: profile
  // }

  {
  path: 'challenges/:id',
  component: ChallengeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    InterestComponent,
    ChallengeComponent,
    InterestChallengeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     LocalStorageModule.withConfig({
            prefix: 'app-root',
            storageType: 'localStorage',
        }),
    RouterModule.forRoot(ROUTES) 
  ],
  providers: [AuthService,InterestsService,ChallengeService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }