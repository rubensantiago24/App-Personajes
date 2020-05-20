import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPersonajeComponent } from './ver-personaje.component';

describe('VerPersonajeComponent', () => {
  let component: VerPersonajeComponent;
  let fixture: ComponentFixture<VerPersonajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPersonajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
