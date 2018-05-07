import { TestBed, inject } from '@angular/core/testing';

import { User } from './api.service';

describe('User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [User]
    });
  });

  it('should be created', inject([User], (service: User) => {
    expect(service).toBeTruthy();
  }));
});
