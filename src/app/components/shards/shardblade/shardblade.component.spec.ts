import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardbladeComponent } from './shardblade.component';

describe('ShardbladeComponent', () => {
  let component: ShardbladeComponent;
  let fixture: ComponentFixture<ShardbladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShardbladeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShardbladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
