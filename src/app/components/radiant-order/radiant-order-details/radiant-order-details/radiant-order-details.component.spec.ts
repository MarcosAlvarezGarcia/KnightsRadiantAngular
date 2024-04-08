import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiantOrderDetailsComponent } from './radiant-order-details.component';

describe('RadiantOrderDetailsComponent', () => {
  let component: RadiantOrderDetailsComponent;
  let fixture: ComponentFixture<RadiantOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadiantOrderDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadiantOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
