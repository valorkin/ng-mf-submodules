import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecommendedCategoriesModule } from './recommended-categories/recommended-categories.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RecommendedCategoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
