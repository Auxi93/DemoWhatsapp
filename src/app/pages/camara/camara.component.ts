import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss']
})
export class CamaraComponent implements OnInit {
  filtroNegro = false
  filtroSepia = false

  constructor() { }

  ngOnInit(): void {

    'use strict';

    const video : any = document.getElementById('video');
    const canvas : any = document.getElementById('canvas');
    const snap : any = document.getElementById("snap");
    const errorMsgElement : any = document.querySelector('span#errorMsg');
    const ventana: any = window

    const constraints : any = {
      audio: false,
      video: {
        width: 1280, height: 720
      }
    };

    // Access webcam
    async function init() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleSuccess(stream);
      } catch (e) {
        errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
      }
    }

    // Success
    function handleSuccess(stream) {
      ventana.stream = stream;
      video.srcObject = stream;
    }

    // Load init
    init();

    // Draw image
    var context = canvas.getContext('2d');
    snap.addEventListener("click", function() {
            context.drawImage(video, 0, 0, 640, 480);
    });
  }
  ponerfiltroNegro(){
    this.filtroNegro = !this.filtroNegro
  }
  ponerfiltroSepia(){
    this.filtroSepia = !this.filtroSepia
  }
}
