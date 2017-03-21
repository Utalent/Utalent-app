/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterestUserService } from './interest-user.service';
import { Http } from '@angular/http';


describe('Service: InterestUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterestUserService,
      {provide: Http, useValue: InterestUserService }
      ]
    });
  });

  it('should ...', inject([InterestUserService], (service: InterestUserService) => {
    expect(service).toBeTruthy();
  }));
});
