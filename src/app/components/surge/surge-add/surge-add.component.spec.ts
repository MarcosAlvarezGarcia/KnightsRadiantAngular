import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeAddComponent } from './surge-add.component';

describe('SurgeAddComponent', () => {
  let component: SurgeAddComponent;
  let fixture: ComponentFixture<SurgeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurgeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurgeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
