import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObVideoComponent } from './ob-video.component';

describe('ObVideoComponent', () => {
  let component: ObVideoComponent;
  let fixture: ComponentFixture<ObVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
