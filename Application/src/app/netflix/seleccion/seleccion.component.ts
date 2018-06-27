import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit, OnDestroy, OnChanges {

  //Propiedad del web component
  @Input() contador;
  //evento del web component
  @Output() cambioElContador = new EventEmitter();
  constructor() {
    // Configuracion de servicios (providers) u otras configuraciones
    console.log('Constructor');
  }

  aumentarContador() {
    this.contador = this.contador + 1;
    this.cambioElContador.emit(this.contador);
  }

  ngOnInit() {
    // Empezar la logica de la pantalla
    console.log('On Init');

    console.log('Contador: ', this.contador);
  }

  ngOnDestroy() {
    console.log('On Destroy');
  }

  ngOnChanges(cambios) {
    console.log('On Changes', cambios);
  }


}