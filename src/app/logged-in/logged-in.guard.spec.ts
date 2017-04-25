import { TestBed, async, inject } from '@angular/core/testing';

import { UserService } from '../user/user.service';
import { LoggedInGuard } from './logged-in.guard';

describe('LoggedInGuard', () => {

  let mockUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggedInGuard,
        { provide: UserService, useValue: mockUserService }
      ]

    });
  });

  it('should ...', inject([LoggedInGuard], (guard: LoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
