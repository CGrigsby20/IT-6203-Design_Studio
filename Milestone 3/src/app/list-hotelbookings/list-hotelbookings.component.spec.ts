import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHotelbookingsComponent } from './list-hotelbookings.component';

describe('ListHotelbookingsComponent', () => {
  let component: ListHotelbookingsComponent;
  let fixture: ComponentFixture<ListHotelbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHotelbookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHotelbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
