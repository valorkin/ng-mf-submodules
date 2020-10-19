import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  template: `<p>item-details page here</p>
  <router-outlet></router-outlet>`
})
export class ItemDetailsComponent {

}

@Component({
  template: `<p>item details sub page</p>`
})
export class ItemSubdetailsComponent {
}

@NgModule({
  declarations: [ItemDetailsComponent],
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ItemDetailsComponent,
      children: [
        {
          path: 'sub',
          component: ItemSubdetailsComponent
        }
      ]
    }
  ])],
  exports: [RouterModule]
})
export class ItemDetailsModule {
}
