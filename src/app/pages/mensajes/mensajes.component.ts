import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {
  nombre
  id = 0
  receptor
  todosUsuarios
  valorInput =''
  valorInput2 = ''
  writing = false

  charlas = [ ]

  constructor(
    public rutaActiva   :ActivatedRoute,
    public router       :Router,
    public datosService : DatosService
  ) 
  { 
    this.id         = rutaActiva.snapshot.params.id
    this.todosUsuarios    = datosService.usuarios
  }

  

  ngOnInit(): void {
    this.receptor = this.todosUsuarios.find( usuario => usuario.id == this.id)
  }


  enviarMensaje(){
    this.receptor.charlas.push(
      {
        envio:'me',
        mensaje: this.valorInput
      }

    )
    console.log(2)
  }
  recibirMensaje(){
    this.receptor.charlas.push(
      {
        envio:'him',
        mensaje: this.valorInput2
      }
    )
    console.log(1)
  }
   //Aparece el writing cuando pulso una tecla.
   // 1) defino el writing -- con un valor false por defecto y escribo el método userWriting
   //2)Dentro pongo que cuando escribo el valor de la propiedad cambia a true
  
  userWriting(){
    this.writing = true
  }
  //desaparecen los puntos cuando dejo de escribir
  //cambio la propiedad writing a false par que deje de escribir al salir de la casilla del form

  noUserWriting(){
    this.writing = false
  }
}
