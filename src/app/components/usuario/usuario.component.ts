import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @Input() seccion : string = 'undefined'
  @Input() info : any ={
    h2: 'Yoda',
    h3: 'Disponible',
    chat: '¡Hola!',
    estado : 12,
    fecha : '01/12/2020',
    img : '/assets/yoda.jpg'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
