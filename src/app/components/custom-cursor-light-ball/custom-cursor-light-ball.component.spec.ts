import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCursorLightBallComponent } from './custom-cursor-light-ball.component';

describe('CustomCursorLightBallComponent', () => {
  let component: CustomCursorLightBallComponent;
  let fixture: ComponentFixture<CustomCursorLightBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomCursorLightBallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomCursorLightBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
