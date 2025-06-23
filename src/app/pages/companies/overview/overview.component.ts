import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentCompaniesTable } from '@components/companies/table/table.component';

@Component({
  selector: 'page-companies-overview',
  imports: [
    ComponentCompaniesTable
],
  templateUrl: './overview.component.html',
})
export class PageCompaniesOverview { }
