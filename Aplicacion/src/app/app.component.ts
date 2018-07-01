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


  arregloUsuarios = [
    {
      id:1,
      imagen:'assets/perfil1.png',
      texto: 'tatis1909'
    },
    {
      id:2,
      imagen:'assets/perfil2.png',
      texto: 'Pedro'
    },
    {
      id:3,
      imagen:'assets/perfil3.png',
      texto: 'Jeff'
    },
    {
      id:4,
      imagen:'assets/perfil4.png',
      texto: 'Edd'
    },
    {
      id:5,
      imagen:'assets/perfil5.png',
      texto: 'Nancy'
    }
  ]
}
