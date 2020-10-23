import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrListComponent} from './pr-list.component';
import {CheckboxModule, TableModule} from '@fundamental-ngx/core';
import {PrListRoutingModule} from './pr-list-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, TableModule, FormsModule, CheckboxModule, PrListRoutingModule],
  declarations: [PrListComponent],
  exports: [PrListComponent],
})
export class PrListModule {
}
