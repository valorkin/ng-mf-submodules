import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LayoutPanelModule} from '@fundamental-ngx/core';
import {AppComponent} from './app.component';
import {RecommendedCategoriesComponent} from './recommended-categories/recommended-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendedCategoriesComponent
  ],
  imports: [
    BrowserModule,
    LayoutPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
