import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeUpdateComponent } from './surge-update.component';

describe('SurgeUpdateComponent', () => {
  let component: SurgeUpdateComponent;
  let fixture: ComponentFixture<SurgeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurgeUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurgeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
