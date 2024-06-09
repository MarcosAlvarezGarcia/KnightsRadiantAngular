import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerladComponent } from './herlad.component';

describe('HerladComponent', () => {
  let component: HerladComponent;
  let fixture: ComponentFixture<HerladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HerladComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HerladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
