import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentCompaniesAddForm } from '../../../components/companies/add/form/form.component';
import { ComponentCompaniesAddPreview } from '@components/companies/add/preview/preview.component';

@Component({
  selector: 'page-companies-add',
  imports: [
    RouterLink,
    ComponentCompaniesAddForm,
    ComponentCompaniesAddPreview,
  ],
  templateUrl: './add.component.html',
})
export class PageCompaniesAdd {

  companyPreview: any = {};

}
