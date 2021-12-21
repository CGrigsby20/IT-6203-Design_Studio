import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarrentalFormComponent } from './new-carrental-form.component';

describe('NewCarrentalFormComponent', () => {
  let component: NewCarrentalFormComponent;
  let fixture: ComponentFixture<NewCarrentalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCarrentalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarrentalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
