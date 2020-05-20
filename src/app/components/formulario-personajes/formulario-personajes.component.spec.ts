import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPersonajesComponent } from './formulario-personajes.component';

describe('FormularioPersonajesComponent', () => {
  let component: FormularioPersonajesComponent;
  let fixture: ComponentFixture<FormularioPersonajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPersonajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
