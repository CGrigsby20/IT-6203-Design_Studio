import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCapstoneFormComponent } from './new-capstone-form.component';

describe('NewCapstoneFormComponent', () => {
  let component: NewCapstoneFormComponent;
  let fixture: ComponentFixture<NewCapstoneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCapstoneFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCapstoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
