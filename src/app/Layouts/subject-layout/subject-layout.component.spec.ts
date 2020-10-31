import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectLayoutComponent } from './subject-layout.component';

describe('SubjectLayoutComponent', () => {
  let component: SubjectLayoutComponent;
  let fixture: ComponentFixture<SubjectLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
