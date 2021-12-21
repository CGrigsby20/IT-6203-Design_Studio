import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDestinationFormComponent } from './new-destination-form.component';

describe('NewDestinationFormComponent', () => {
  let component: NewDestinationFormComponent;
  let fixture: ComponentFixture<NewDestinationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDestinationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDestinationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
