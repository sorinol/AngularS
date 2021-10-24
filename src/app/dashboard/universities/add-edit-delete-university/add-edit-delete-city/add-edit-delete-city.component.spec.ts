import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteCityComponent } from './add-edit-delete-city.component';

describe('AddEditDeleteCityComponent', () => {
  let component: AddEditDeleteCityComponent;
  let fixture: ComponentFixture<AddEditDeleteCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeleteCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
