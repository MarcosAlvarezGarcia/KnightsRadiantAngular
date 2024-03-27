import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeDetailsComponent } from './surge-details.component';

describe('SurgeDetailsComponent', () => {
  let component: SurgeDetailsComponent;
  let fixture: ComponentFixture<SurgeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurgeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurgeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
