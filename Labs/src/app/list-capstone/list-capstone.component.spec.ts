import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCapstoneComponent } from './list-capstone.component';

describe('ListCapstoneComponent', () => {
  let component: ListCapstoneComponent;
  let fixture: ComponentFixture<ListCapstoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCapstoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCapstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
