
// /* tslint:disable:no-unused-variable */
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';
// import { InterestsService } from '../interests.service';

// import { InterestDetailsComponent } from './interest-details.component';
// import { RouterTestingModule } from '@angular/router/testing';
// import { FormsModule } from '@angular/forms';
// import { Http } from '@angular/http';



/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InterestDetailsComponent } from './interest-details.component';


describe('InterestDetailsComponent', () => {
  let component: InterestDetailsComponent;
  let fixture: ComponentFixture<InterestDetailsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestDetailsComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(InterestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
