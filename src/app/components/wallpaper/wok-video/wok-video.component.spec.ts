import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WokVideoComponent } from './wok-video.component';

describe('WokVideoComponent', () => {
  let component: WokVideoComponent;
  let fixture: ComponentFixture<WokVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WokVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WokVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
