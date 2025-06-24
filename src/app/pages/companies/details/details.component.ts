import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ComponentCompaniesDetails } from '@components/companies/details/details.component';
import { Company } from '@interfaces/company.interface';
import { CompanyService } from '@services/company.service';
import { ComponentSharedToast } from "../../../components/shared/toast/toast.component";

@Component({
  selector: 'page-companies-details',
  imports: [
    RouterLink,
    ComponentCompaniesDetails,
    ComponentSharedToast
],
  templateUrl: './details.component.html',
})
export class PageCompaniesDetails {

  company: Company | null = null;
  companyId: string | null = null;
  errorMessage: string | null = null;

  private companyService = inject(CompanyService);
  private route= inject(ActivatedRoute);

  ngOnInit(): void {
    this.companyId = this.route.snapshot.paramMap.get('id');
    if (this.companyId) {
      this.getCompanyDetails(this.companyId);
    }
  }

  // Obtener los detalles de la empresa
  getCompanyDetails(id: string): void {
    this.companyService.getCompanyById(id).subscribe(
      (company: any) => {
        this.company = company.data;
      },
      (error) => {
        this.errorMessage = 'Error al cargar los detalles de la empresa';
      }
    );
  }

}
