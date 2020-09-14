import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedCategoriesComponent } from './recommended-categories.component';

describe('RecommendedCategoriesComponent', () => {
  let component: RecommendedCategoriesComponent;
  let fixture: ComponentFixture<RecommendedCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
