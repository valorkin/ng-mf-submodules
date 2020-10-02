import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeItemPageComponent } from './iframe-item-page.component';

describe('IframeItemPageComponent', () => {
  let component: IframeItemPageComponent;
  let fixture: ComponentFixture<IframeItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
