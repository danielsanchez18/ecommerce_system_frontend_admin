import { Component, inject } from '@angular/core';
import { CompanyService } from '@services/company.service';
import { ArrowUpDown, ChevronDown, Globe, LucideAngularModule, Mail, Phone, Search, SlidersHorizontal, X, ChevronRight, ChevronLeft } from 'lucide-angular';
import { PaginatedResponse } from '@interfaces/paginated-response.interface';
import { Company } from '@interfaces/company.interface';
import { CommonModule } from '@angular/common';
import { ImageService } from '@services/image.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ComponentCompaniesFilters } from "@components/companies/filters/filters.component";
import { ComponentSharedAtomsSearch } from '@components/shared/atoms/search/search.component';

@Component({
  selector: 'component-companies-table',
  imports: [
    LucideAngularModule,
    CommonModule, FormsModule, RouterLink,
    ComponentCompaniesFilters,
    ComponentSharedAtomsSearch
],
  templateUrl: './table.component.html',
})
export class ComponentCompaniesTable {

  companies: Company[] = [];
  page: number = 0;
  size: number = 10;
  totalElements: number = 0;
  numberOfElements: number = 0;
  totalPages: number = 0;
  searchQuery: string = '';  // Para la búsqueda
  startDate: string | null = null;  // Para el filtro de fecha de inicio
  endDate: string | null = null;    // Para el filtro de fecha de fin
  enabled: boolean | null = null;   // Para el filtro de habilitación

  readonly Search = Search;
  readonly ArrowUpDown = ArrowUpDown;
  readonly ChevronDown = ChevronDown;
  readonly SlidersHorizontal = SlidersHorizontal;
  readonly Phone = Phone;
  readonly Globe = Globe;
  readonly Mail = Mail;
  readonly X = X;
  readonly ChevronRight = ChevronRight;
  readonly ChevronLeft = ChevronLeft;

  private companyService = inject(CompanyService);
  private imageService = inject(ImageService);

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.search(this.searchQuery, this.startDate, this.endDate, this.enabled, this.page, this.size).subscribe(
      (response: PaginatedResponse<Company>) => {
        this.companies = response.data.content;
        this.totalElements = response.data.totalElements;
        this.totalPages = response.data.totalPages;
        this.calculateNumberOfElements();
      },
      (error) => {
        console.error('Error al cargar las empresas', error);
      }
    );
  }

  getImageUrl(relativePath: string): string {
    return this.imageService.getImageUrl(relativePath);
  }

  changePage(pageNumber: number): void {
    if (pageNumber >= 0 && pageNumber < this.totalPages) {
      this.page = pageNumber;
      this.loadCompanies();
    }
  }
  calculateNumberOfElements(): void {
    this.numberOfElements = Math.min((this.page + 1) * this.size, this.totalElements);
  }

  // Método para limpiar la búsqueda desde el componente hijo
  clearSearch(): void {
    this.searchQuery = '';
    this.loadCompanies();
  }


}
