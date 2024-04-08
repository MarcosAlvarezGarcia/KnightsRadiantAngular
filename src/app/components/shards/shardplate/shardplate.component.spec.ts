import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardplateComponent } from './shardplate.component';

describe('ShardplateComponent', () => {
  let component: ShardplateComponent;
  let fixture: ComponentFixture<ShardplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShardplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShardplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
