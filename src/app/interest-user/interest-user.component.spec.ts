/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InterestUserComponent } from './interest-user.component';

describe('InterestUserComponent', () => {
  let component: InterestUserComponent;
  let fixture: ComponentFixture<InterestUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
