import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSoftComponent } from './hard-soft.component';

describe('HardSoftComponent', () => {
  let component: HardSoftComponent;
  let fixture: ComponentFixture<HardSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
