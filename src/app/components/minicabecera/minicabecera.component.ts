import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-minicabecera',
  templateUrl: './minicabecera.component.html',
  styleUrls: ['./minicabecera.component.scss']
})
export class MinicabeceraComponent implements OnInit {
  
  @Input() titulo     : string = 'Valor por defecto'
  @Input() editarBtn  : boolean = true
  @Input() escribirBtn: boolean = true 
  @Input() atrasBtn   : boolean = false
  @Input() camaraBtn   : boolean = false
  @Input() phoneBtn   : boolean = false


  constructor() { }

  ngOnInit(): void {
  }

}
