import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionRefComponent } from './detection-ref.component';

describe('DetectionRefComponent', () => {
  let component: DetectionRefComponent;
  let fixture: ComponentFixture<DetectionRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectionRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
