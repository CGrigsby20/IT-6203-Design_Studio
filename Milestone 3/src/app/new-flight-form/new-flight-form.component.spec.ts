import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFlightFormComponent } from './new-flight-form.component';

describe('NewFlightFormComponent', () => {
  let component: NewFlightFormComponent;
  let fixture: ComponentFixture<NewFlightFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFlightFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFlightFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
