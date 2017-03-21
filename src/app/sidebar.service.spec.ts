import { TestBed, inject } from '@angular/core/testing';
import { SidebarService } from './sidebar.service';
import { Http } from '@angular/http';


describe('Service : SidebarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SidebarService,
       {provide: Http, useValue: SidebarService }
       ]
    });
  });

  it('should ...', inject([SidebarService], (service: SidebarService) => {
    expect(service).toBeTruthy();
  }));
});
