import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  usuarios : Array<object> = []

  constructor(
    public datosService   : DatosService,
    public router         : Router,
  ) { 
    this.usuarios = datosService.usuarios
  }

  ngOnInit(): void {
  }
  viajar(x){
    this.router.navigate(['/mensajes', x])
  }
}
