import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'component-shared-atoms-select',
  imports: [
    CommonModule
  ],
  templateUrl: './select.component.html',
})
export class ComponentSharedAtomsSelect {

  @Input() placeholder: string = 'Seleccione una opción...';
  @Input() options: { value: string; label: string; disabled?: boolean }[] = []; // Opciones para el select
  @Output() selectChange = new EventEmitter<string>(); // Emite el valor seleccionado

  onSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const value = selectElement.value;

    if (value && value !== '') { // Verificar que el valor no sea null, undefined ni vacío
      this.selectChange.emit(value);
    }
  }

}
