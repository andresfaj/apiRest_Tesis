import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpublicationsComponent } from './userpublications.component';

describe('UserpublicationsComponent', () => {
  let component: UserpublicationsComponent;
  let fixture: ComponentFixture<UserpublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
