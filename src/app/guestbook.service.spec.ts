import { TestBed, inject } from '@angular/core/testing';

import { GuestbookService } from './guestbook.service';

describe('GuestbookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestbookService]
    });
  });

  it('should be created', inject([GuestbookService], (service: GuestbookService) => {
    expect(service).toBeTruthy();
  }));
});
