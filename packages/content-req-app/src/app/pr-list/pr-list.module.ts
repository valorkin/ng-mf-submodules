import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrListComponent} from './pr-list.component';
import {TableModule} from '@fundamental-ngx/core';
import {PrListRoutingModule} from './pr-list-routing.module';

@NgModule({
  imports: [CommonModule, TableModule, PrListRoutingModule],
  declarations: [PrListComponent],
  exports: [PrListComponent],
})
export class PrListModule {
}
