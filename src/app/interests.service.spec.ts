 // tslint:disable:no-unused-variable 

import { TestBed, async, inject } from '@angular/core/testing';
import { InterestsService } from './interests.service';
import { Http } from '@angular/http';


describe('Service: InterestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ InterestsService,
      {provide: Http, useValue: InterestsService }
      ]
    })
  });

  it('should ...', inject([InterestsService], (service: InterestsService) => {
    expect(service).toBeTruthy();
  }));
});
