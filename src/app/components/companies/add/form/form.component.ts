import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ComponentSharedAlertsConfirm } from '@components/shared/alerts/confirm/confirm.component';
import { ComponentSharedAlertsError } from '@components/shared/alerts/error/error.component';
import { ComponentSharedAlertsSuccess } from '@components/shared/alerts/success/success.component';
import { Company } from '@interfaces/company.interface';
import { CompanyService } from '@services/company.service';

@Component({
  selector: 'component-companies-add-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ComponentSharedAlertsConfirm,
    ComponentSharedAlertsSuccess,
    ComponentSharedAlertsError
],
  templateUrl: './form.component.html',
})
export class ComponentCompaniesAddForm {

  private companyService = inject(CompanyService);
  @Output() companyPreview = new EventEmitter<any>();

  companyForm!: FormGroup;
  image: File | null = null;
  companyPreviewData: any = {};

  successMessage: string = '';
  errorMessage: string = '';
  errorMessageValidator: string = '';

  constructor(private fb: FormBuilder) {
    this.companyForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      phoneNumber: [null, [Validators.minLength(9), Validators.maxLength(20)]],
      email: [null, [Validators.email, Validators.maxLength(50)]],
      website: [null, [Validators.pattern('^(https?:\/\/)?(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,6}(\.[a-zA-Z]{2,6})?(\/[^\s]*)?$')]],
    });

    // Actualizar la vista previa en tiempo real
    this.companyForm.valueChanges.subscribe(value => {
      this.companyPreviewData = { ...value, logoUrl: this.image };
      this.companyPreview.emit(this.companyPreviewData);
    });
  }

  // Función que se ejecuta cuando se selecciona una imagen
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.image = input.files[0]; // Almacenamos la imagen seleccionada

      // Verificar si el tamaño de la imagen es mayor a 5 MB
      if (this.image.size > 5 * 1024 * 1024) {
        this.errorMessageValidator = 'La imagen no debe pesar más de 5 MB.';
        this.image = null; // Limpiamos la imagen
        input.value = ''; // Limpiamos el input del archivo
        this.companyPreviewData.logoUrl = null; // Limpiamos la vista previa
        this.companyPreview.emit(this.companyPreviewData); // Emitir la vista previa vacía
      } else {
        this.companyPreviewData.logoUrl = URL.createObjectURL(this.image); // Vista previa
        this.companyPreview.emit(this.companyPreviewData);  // Emitir la vista previa
        this.errorMessageValidator = ''; // Limpiar el mensaje de error si la imagen es válida
      }
    }
  }

  // Eliminar cualquier carácter que no sea un número
  onPhoneNumberInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '');
  }

  // Función que se ejecuta al enviar el formulario
  onConfirmCompany(): void {

    // Cambiar el texto del botón a "Cargando..." cada vez que se haga clic en "Confirmar"
    const confirmButton = document.querySelector('#alerts-confirm .btn-primary') as HTMLElement;
    if (confirmButton) {
      confirmButton.textContent = 'Cargando...';  // Cambiamos el texto a "Cargando..."
    }

    if (this.companyForm.valid) {
      const company: Company = this.companyForm.value;
      const formData = new FormData();
      console.log(company);

      formData.append('company', JSON.stringify(company)); // Convertimos la empresa a JSON

      if (this.image) {
        formData.append('image', this.image); // Añadimos la imagen al FormData si existe
      }

      this.companyService.create(formData).subscribe({
        next: (response: any) => {
          this.successMessage = response.message || 'Empresa creada exitosamente';
          const successButton = document.querySelector('#open-success-modal') as HTMLElement;
          successButton?.click();

          // Restauramos el texto del botón a "Confirmar" después de recibir la respuesta
          if (confirmButton) {
            confirmButton.textContent = 'Confirmar';
          }
        },
        error: (err) => {
          this.errorMessage = err.error.error || 'Error al crear la empresa';
          const errorButton = document.querySelector('#open-error-modal') as HTMLElement;
          errorButton?.click();

          // Restauramos el texto del botón a "Confirmar" después de recibir la respuesta
          if (confirmButton) {
            confirmButton.textContent = 'Confirmar';
          }
        },
      });
    }
  }

}
