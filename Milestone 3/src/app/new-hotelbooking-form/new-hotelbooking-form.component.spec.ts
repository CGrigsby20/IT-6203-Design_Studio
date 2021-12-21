import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHotelbookingFormComponent } from './new-hotelbooking-form.component';

describe('NewHotelbookingFormComponent', () => {
  let component: NewHotelbookingFormComponent;
  let fixture: ComponentFixture<NewHotelbookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHotelbookingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHotelbookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
