import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileSliderComponent } from './teacher-profile-slider.component';

describe('TeacherProfileSliderComponent', () => {
  let component: TeacherProfileSliderComponent;
  let fixture: ComponentFixture<TeacherProfileSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherProfileSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
