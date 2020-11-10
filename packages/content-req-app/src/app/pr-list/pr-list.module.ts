import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule, TableModule } from '@fundamental-ngx/core';
import { PrListRoutingModule } from './pr-list-routing.module';
import { PrListComponent } from './pr-list.component';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    CheckboxModule,
    PrListRoutingModule
  ],
  declarations: [PrListComponent],
  exports: [PrListComponent],
})
export class PrListModule {
}

export { PrListComponent };
