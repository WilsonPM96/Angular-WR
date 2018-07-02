import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ok} from "assert";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.css']
})
export class RutaUsuarioComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const observableParametros$= this._activatedRoute.params;
    observableParametros$.subscribe(
      (parametros)=>{
        console.log(parametros);
      }, (error)=>{

      }, ()=>{

      }
    )
  }

}
