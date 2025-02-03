import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassgenComponent } from './passgen.component';

describe('PassgenComponent', () => {
  let component: PassgenComponent;
  let fixture: ComponentFixture<PassgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassgenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
