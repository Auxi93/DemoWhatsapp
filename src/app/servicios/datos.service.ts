import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  options: Array<object> = [
    {
      clase: 'fas fa-star',
      h4: 'Mensajes destacados',
    },
    {
      clase: 'fas fa-laptop',
      h4: 'Whatsapp web/Escritorio',
    },
    {
      clase: 'fas fa-key',
      h4: 'Cuenta',
    },
    {
      clase: 'fab fa-whatsapp',
      h4: 'Chats',
      numero: 1,
    },
    {
      clase: 'fas fa-stop',
      h4: 'Notificaciones',
    },
    {
      clase: 'fas fa-exchange-alt',
      h4: 'Almacenamiento y datos',
    },
    {
      clase: 'fas fa-info',
      h4: 'Ayuda',
    },
    {
      clase: 'fas fa-heart',
      h4: 'Invitar amigos',
    },
  ];
  cabecera : Array<object> = [
    {
      ruta  : '/estados',
      clase : 'fas fa-circle',
      texto : 'Estados',
    },
    {
      ruta  : '/llamadas',
      clase : 'fas fa-phone',
      texto : 'Llamadas',
    },
    {
      ruta  : '/camara',
      clase : 'fas fa-camera',
      texto : 'Cámara',
    },
    {
      ruta  : '/chats',
      clase : 'fab fa-facebook-messenger',
      texto : 'Chats',
    },
    {
      ruta  : '/configuracion',
      clase : 'fas fa-cog',
      texto : 'Configuracion',
    },
    


  ]
  usuarios : Array<object> = [
    {
      id: 1,
      h2: 'Yoda',
      h3: 'Disponible',
      chat: 'Mucho que aprender',
      estado : 12,
      fecha : '01/12/2020',
      img : '/assets/yoda.jpg',
      charlas : [
        {
          envio: 'him',
          mensaje: '¿Quieres saber la diferencia entre un maestro y un aprendiz? '
        },
        {
          envio: 'me',
          mensaje: 'Sí'
        },
        {
          envio: 'him',
          mensaje: ' El maestro ha fallado más veces de las que el principiante lo ha intentado.'
        },
      ]
    },
  
    { 
      id: 2,
      h2: 'Leia',
      h3: 'Disponible',
      chat: 'Tenemos todo lo que necesitamos',
      estado : 20,
      fecha : '09/11/2020',
      img : '/assets/leia.jpg', 
      charlas : [
        {
          envio: 'him',
          mensaje: 'Espero que sepas lo que estás haciendo'
        },
        {
          envio: 'me',
          mensaje: 'No tengo ni idea'
        },
      ]
    },
    {
      id: 3,
      h2: 'Darth vader',
      h3: 'No disponible',
      chat: '¡Únete al lado oscuro!',
      estado : 100,
      fecha : '01/12/2020',
      img : '/assets/vader.jpg',
      charlas : [
        {
          envio: 'me',
          mensaje: '¿Quién eres?'
        },
        {
          envio: 'him',
          mensaje: 'Yo soy tu PADRE'
        },
      ]
    },
    { 
      id: 4,
      h2: 'Han Solo',
      h3: 'No disponible',
      chat: 'Todo lo que hayas oído de mí es cierto',
      estado : 100,
      fecha : '01/12/2020',
      img : '/assets/Han.jpg'
    },


  ]
  constructor() { }
}
