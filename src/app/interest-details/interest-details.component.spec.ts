/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { InterestsService } from '../interests.service';

import { InterestDetailsComponent } from './interest-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';



describe('InterestDetailsComponent', () => {
  let component: InterestDetailsComponent;
  let fixture: ComponentFixture<InterestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestDetailsComponent ],
      providers: [ InterestsService,
            {provide: RouterTestingModule,  useClass: InterestDetailsComponent},
                   {provide: Http, useValue:InterestsService  }

    	],
        imports: [ RouterTestingModule,FormsModule  ]
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
