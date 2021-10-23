import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeleteFacultyComponent } from './add-edit-delete-faculty.component';

describe('AddEditDeleteFacultyComponent', () => {
  let component: AddEditDeleteFacultyComponent;
  let fixture: ComponentFixture<AddEditDeleteFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeleteFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeleteFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
