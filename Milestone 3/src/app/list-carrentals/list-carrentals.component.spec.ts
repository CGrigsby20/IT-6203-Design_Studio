import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarrentalsComponent } from './list-carrentals.component';

describe('ListCarrentalsComponent', () => {
  let component: ListCarrentalsComponent;
  let fixture: ComponentFixture<ListCarrentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCarrentalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarrentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
