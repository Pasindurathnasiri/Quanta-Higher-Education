import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileLayoutComponent } from './teacher-profile-layout.component';

describe('TeacherProfileLayoutComponent', () => {
  let component: TeacherProfileLayoutComponent;
  let fixture: ComponentFixture<TeacherProfileLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherProfileLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
