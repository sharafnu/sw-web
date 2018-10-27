import { TestBed } from '@angular/core/testing';

import { WorkerService } from './worker.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkerService = TestBed.get(WorkerService);
    expect(service).toBeTruthy();
  });
});
