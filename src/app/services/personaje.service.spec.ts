import { TestBed } from '@angular/core/testing';

import { PersonajeService } from './personaje.service';
import { Observable } from 'rxjs';

describe('PersonajeService', () => {
  let service: PersonajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
