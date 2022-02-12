import { TestBed } from '@angular/core/testing';

import { AutomaticDriverAssignService } from './automatic-driver-assign.service';

describe('AutomaticDriverAssignService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutomaticDriverAssignService = TestBed.get(AutomaticDriverAssignService);
    expect(service).toBeTruthy();
  });
});
