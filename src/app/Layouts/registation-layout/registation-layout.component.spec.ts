import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistationLayoutComponent } from './registation-layout.component';

describe('RegistationLayoutComponent', () => {
  let component: RegistationLayoutComponent;
  let fixture: ComponentFixture<RegistationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistationLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
