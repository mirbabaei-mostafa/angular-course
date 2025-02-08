import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Typing2Component } from './typing2.component';

describe('Typing2Component', () => {
  let component: Typing2Component;
  let fixture: ComponentFixture<Typing2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Typing2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Typing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
