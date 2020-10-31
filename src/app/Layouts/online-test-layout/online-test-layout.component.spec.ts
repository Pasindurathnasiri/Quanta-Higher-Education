import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestLayoutComponent } from './online-test-layout.component';

describe('OnlineTestLayoutComponent', () => {
  let component: OnlineTestLayoutComponent;
  let fixture: ComponentFixture<OnlineTestLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineTestLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTestLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
