import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiantOrderListComponent } from './radiant-order-list.component';

describe('RadiantOrderListComponent', () => {
  let component: RadiantOrderListComponent;
  let fixture: ComponentFixture<RadiantOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RadiantOrderListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadiantOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
