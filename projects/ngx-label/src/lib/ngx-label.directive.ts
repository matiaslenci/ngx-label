import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[label]',
})
export class NgxLabelDirective implements AfterViewInit {
  /**
   * Input para establecer el texto del label
   */
  @Input('label') label: string = '';
  /**
   * Input para establecer si el input es requerido
   */
  @Input('isRequired') set isRequired(value: boolean | string) {
    // Se establece el valor del input requerido en función del valor del atributo isRequired
    this._isRequired = value !== false && value !== 'false' && value !== null;
  }
  /**
   *  Valor por defecto para el input requerido
   */
  private _isRequired = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Método que se ejecuta después de que la vista ha sido inicializada
  ngAfterViewInit() {
    // Se crea un elemento label
    const label = this.renderer.createElement('label');
    // Se establece el texto del label en función del valor del atributo label
    this.renderer.setProperty(label, 'textContent', this.label);

    // Si el input es requerido, se agrega un asterisco al label
    if (this._isRequired) {
      // Se crea un elemento span donde se carga el *
      const required = this.renderer.createElement('span');
      // Propiedad textContent para establecer el texto del span
      this.renderer.setProperty(required, 'textContent', ' *');
      // Se agrega la clase required al span para darle estilos
      this.renderer.addClass(required, 'required');
      // Se inserta el span dentro del label
      this.renderer.appendChild(label, required);
    }

    // Se inserta el label antes del input en el DOM
    this.renderer.insertBefore(
      this.el.nativeElement.parentNode,
      label,
      this.el.nativeElement
    );
  }
}
