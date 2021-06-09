import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  cabecera : Array<object> = []
  constructor(
    private routerActivated: ActivatedRoute,
    private router :Router,
    private datosService: DatosService,
  ) { 
    this.cabecera = datosService.cabecera
  }

  ngOnInit(): void {
  }
  viajar (x): void {
    this.router.navigate([x])
  }
  esActivo(x){
    if(x == this.router.url){
      return true
    }else {
      return false
    }
  }

}
