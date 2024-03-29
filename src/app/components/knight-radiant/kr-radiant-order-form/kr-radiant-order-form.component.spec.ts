import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KRRadiantOrderFormComponent } from './kr-radiant-order-form.component';

describe('KRRadiantOrderFormComponent', () => {
  let component: KRRadiantOrderFormComponent;
  let fixture: ComponentFixture<KRRadiantOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KRRadiantOrderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KRRadiantOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
