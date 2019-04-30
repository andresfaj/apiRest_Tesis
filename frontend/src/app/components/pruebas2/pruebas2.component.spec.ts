import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pruebas2Component } from './pruebas2.component';

describe('Pruebas2Component', () => {
  let component: Pruebas2Component;
  let fixture: ComponentFixture<Pruebas2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pruebas2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pruebas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
