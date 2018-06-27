import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //interpolacion
  mostrarComponente = false;
  contadorDesdePapa = 0;
  titulo = 'Web';
  usuario = {
    nombre: 'Wilson',
    apellido: 'Ramos'
  };
  arregloNumeros = [5, 4, 3, 2, 1];
  mostrarTitulo = true;
  imagenUrl = "https://pm1.narvii.com/6216/4ea9e980e438a251a2ed1f8d518ba3a7a8fe42fb_hq.jpg";
  imagenWidth = 300;

  html = ` 
  <h1>HOLA</h1>
  <p>Hola mundo</p>
  <img src="${this.imagenUrl}" alt="">
  `;

  aumentarWidth(evento){
    console.log('evento', evento);
    this.imagenWidth += 10;

  }
  restarWidth(){
    this.imagenWidth -= 10;

  }

  actualizarContador(contadorHijo){
    console.log('Se ejecuto', contadorHijo);
    this.contadorDesdePapa = contadorHijo;
  }
}
