import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aframe360Component } from './aframe360.component';

describe('Aframe360Component', () => {
  let component: Aframe360Component;
  let fixture: ComponentFixture<Aframe360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aframe360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aframe360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
