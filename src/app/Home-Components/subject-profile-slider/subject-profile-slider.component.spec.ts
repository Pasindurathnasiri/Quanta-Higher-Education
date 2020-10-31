import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectProfileSliderComponent } from './subject-profile-slider.component';

describe('SubjectProfileSliderComponent', () => {
  let component: SubjectProfileSliderComponent;
  let fixture: ComponentFixture<SubjectProfileSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectProfileSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectProfileSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
