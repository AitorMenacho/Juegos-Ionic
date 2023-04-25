import { TestBed } from '@angular/core/testing';

import { AllPersonajesService } from './all-personajes.service';

describe('AllPersonajesService', () => {
  let service: AllPersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllPersonajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
