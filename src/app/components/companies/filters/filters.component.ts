import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Check, LucideAngularModule, X, ChevronDown } from 'lucide-angular';


@Component({
  selector: 'component-companies-filters',
  imports: [
    LucideAngularModule,
    CommonModule, FormsModule
  ],
  templateUrl: './filters.component.html',
})
export class ComponentCompaniesFilters  {

  selectedState: string | null = null;

  readonly X = X;
  readonly ChevronDown = ChevronDown;
  readonly Check = Check;

}
