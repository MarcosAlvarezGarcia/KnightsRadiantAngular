import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowVideoComponent } from './row-video.component';

describe('RowVideoComponent', () => {
  let component: RowVideoComponent;
  let fixture: ComponentFixture<RowVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
