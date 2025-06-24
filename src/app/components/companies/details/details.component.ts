import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Company } from '@interfaces/company.interface';
import { ImageService } from '@services/image.service';
import { Calendar, LucideAngularModule, Phone, UserRound, Mail, Globe, Building2, Info, MapPin, User } from 'lucide-angular';

@Component({
  selector: 'component-companies-details',
  imports: [
    CommonModule, RouterLink,
    LucideAngularModule,
  ],
  templateUrl: './details.component.html',
})
export class ComponentCompaniesDetails {

  @Input() company!: Company;

  private imageService = inject(ImageService);

  readonly UserRound = UserRound;
  readonly User = User;
  readonly Calendar = Calendar;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly Globe = Globe;
  readonly Building2 = Building2;
  readonly Info = Info;
  readonly MapPin = MapPin;

  getImageUrl(relativePath: string): string {
    return this.imageService.getImageUrl(relativePath);
  }

}
