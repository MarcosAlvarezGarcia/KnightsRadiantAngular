import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorVideoComponent } from './wor-video.component';

describe('WorVideoComponent', () => {
  let component: WorVideoComponent;
  let fixture: ComponentFixture<WorVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
