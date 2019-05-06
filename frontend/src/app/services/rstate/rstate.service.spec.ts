import { TestBed } from '@angular/core/testing';

import { RstateService } from './rstate.service';

describe('RstateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RstateService = TestBed.get(RstateService);
    expect(service).toBeTruthy();
  });
});
