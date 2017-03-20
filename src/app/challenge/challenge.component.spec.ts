/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChallengeComponent } from './challenge.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ChallengeService } from '../challenge.service';

import { Http } from '@angular/http';

describe('ChallengeComponent', () => {
  let component: ChallengeComponent;
  let fixture: ComponentFixture<ChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeComponent ],
      providers: [ ChallengeService,
            {provide: RouterTestingModule,  useClass:  ChallengeComponent},
                   {provide: Http, useValue:ChallengeService  }

    	],
        imports: [ RouterTestingModule,FormsModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
