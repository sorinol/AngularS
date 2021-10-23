import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewUniversityComponent } from './preview-university.component';

describe('PreviewUniversityComponent', () => {
  let component: PreviewUniversityComponent;
  let fixture: ComponentFixture<PreviewUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
