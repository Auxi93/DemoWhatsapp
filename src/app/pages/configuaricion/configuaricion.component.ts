import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-configuaricion',
  templateUrl: './configuaricion.component.html',
  styleUrls: ['./configuaricion.component.scss'],
})
export class ConfiguaricionComponent implements OnInit {
  options: Array<object> = []
  constructor(
    private datosService:DatosService
  ) 
  {
    this.options= datosService.options
  }

  ngOnInit(): void {}
}
