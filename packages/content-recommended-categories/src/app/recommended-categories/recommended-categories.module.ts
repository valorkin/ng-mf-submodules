import { NgModule } from '@angular/core';
import { LayoutPanelModule } from '@fundamental-ngx/core';
import { RecommendedCategoriesComponent } from './recommended-categories.component';

@NgModule({
  imports: [LayoutPanelModule],
  declarations: [RecommendedCategoriesComponent],
  exports: [RecommendedCategoriesComponent]
})
export class RecommendedCategoriesModule {
}

export { RecommendedCategoriesComponent };
