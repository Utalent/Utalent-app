import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LocalStorageModule } from 'angular-2-local-storage';
import { ModalModule } from 'ng2-bootstrap/modal';


import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { InterestComponent } from './interests/interests.component';
import { InterestDetailsComponent } from './interest-details/interest-details.component';
import { CreateChallengeComponent } from './create-challenge/create-challenge.component';



import { MainService } from './main.service';
import { ChallengeService } from './challenge.service';
import { AuthService } from './auth.service';
import { InterestsService } from './interests.service';


import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';



import { ChallengeComponent } from './challenge/challenge.component';
import { MainComponent } from './main/main.component';
import { CheckLoggedIn } from './auth.guard';
import { PostComponent } from './post/post.component';


import { InterestUserComponent } from './interest-user/interest-user.component';
import { InterestUserService } from './interest-user.service';
import { SidebarComponent } from './sidebar/sidebar.component';


import { HomeComponent } from './home/home.component';




// Define the routes
const ROUTES = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [CheckLoggedIn]
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
    component: InterestComponent,
    canActivate: [CheckLoggedIn]
  },
  {
    path: 'users/:username',
    component: ProfileComponent,
    canActivate: [CheckLoggedIn] 
  },
  {
    path: 'challenges/:id',
    component: ChallengeComponent,
    canActivate: [CheckLoggedIn]
  },
  
  {
    path: 'interest/:name',
    component: InterestDetailsComponent,
    canActivate: [CheckLoggedIn]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    InterestComponent,
    ChallengeComponent,
    ProfileComponent,
    InterestDetailsComponent,
    ChallengeComponent,
    CreateChallengeComponent,
    MainComponent,
    PostComponent,
    CreateChallengeComponent ,
    InterestUserComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
          prefix: 'app-root',
          storageType: 'localStorage',
    }),
    ModalModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true }) 
  ],
  providers: [AuthService,InterestsService,ProfileService,ChallengeService,CheckLoggedIn,InterestUserService, MainService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})

export class AppModule { }