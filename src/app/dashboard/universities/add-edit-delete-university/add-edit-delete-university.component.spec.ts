import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteUniversityComponent } from './add-edit-delete-university.component';

describe('AddEditDeleteUniversityComponent', () => {
  let component: AddEditDeleteUniversityComponent;
  let fixture: ComponentFixture<AddEditDeleteUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeleteUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
