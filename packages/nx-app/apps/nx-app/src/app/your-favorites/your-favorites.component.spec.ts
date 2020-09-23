import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourFavoritesComponent } from './your-favorites.component';

describe('YourFavoritesComponent', () => {
  let component: YourFavoritesComponent;
  let fixture: ComponentFixture<YourFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
