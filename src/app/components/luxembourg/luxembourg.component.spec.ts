import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxembourgComponent } from './luxembourg.component';

describe('LuxembourgComponent', () => {
  let component: LuxembourgComponent;
  let fixture: ComponentFixture<LuxembourgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxembourgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxembourgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
