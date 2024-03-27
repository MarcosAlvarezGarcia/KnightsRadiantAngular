import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WOKComponent } from './wok.component';

describe('WOKComponent', () => {
  let component: WOKComponent;
  let fixture: ComponentFixture<WOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WOKComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
