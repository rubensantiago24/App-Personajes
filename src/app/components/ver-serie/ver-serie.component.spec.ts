import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSerieComponent } from './ver-serie.component';

describe('VerSerieComponent', () => {
  let component: VerSerieComponent;
  let fixture: ComponentFixture<VerSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
