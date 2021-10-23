import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFacultyComponent } from './preview-faculty.component';

describe('PreviewFacultyComponent', () => {
  let component: PreviewFacultyComponent;
  let fixture: ComponentFixture<PreviewFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
