/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChallengeService } from './challenge.service';
import { Http } from '@angular/http';


describe('Service: ChallengeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChallengeService,
      {provide: Http, useValue: ChallengeService }]
    });
  });

  it('should ...', inject([ChallengeService], (service: ChallengeService) => {
    expect(service).toBeTruthy();
  }));
});
