import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeListComponent } from './surge-list.component';

describe('SurgeListComponent', () => {
  let component: SurgeListComponent;
  let fixture: ComponentFixture<SurgeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurgeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurgeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
