import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule, Phone, Globe, Mail } from 'lucide-angular';

@Component({
  selector: 'component-companies-add-preview',
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  templateUrl: './preview.component.html',
})
export class ComponentCompaniesAddPreview {

  readonly Phone = Phone;
  readonly Globe = Globe;
  readonly Mail = Mail;

  @Input() companyPreview: any;

}
