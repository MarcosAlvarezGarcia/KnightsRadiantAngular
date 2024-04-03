import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayTheWordsComponent } from './say-the-words.component';

describe('SayTheWordsComponent', () => {
  let component: SayTheWordsComponent;
  let fixture: ComponentFixture<SayTheWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SayTheWordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SayTheWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
