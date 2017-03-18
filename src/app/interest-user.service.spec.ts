/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InterestUserService } from './interest-user.service';

describe('InterestUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterestUserService]
    });
  });

  it('should ...', inject([InterestUserService], (service: InterestUserService) => {
    expect(service).toBeTruthy();
  }));
});
