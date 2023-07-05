import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveComponent } from './solve.component';

describe('SolveComponent', () => {
  let component: SolveComponent;
  let fixture: ComponentFixture<SolveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolveComponent]
    });
    fixture = TestBed.createComponent(SolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
