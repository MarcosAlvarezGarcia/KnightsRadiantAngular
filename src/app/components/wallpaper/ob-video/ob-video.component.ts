import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-ob-video',
  templateUrl: './ob-video.component.html',
  styleUrl: './ob-video.component.css'
})
export class ObVideoComponent implements OnInit {

  wokVideo: any;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit(): void {
    // Crear el elemento de video
    const videoElement = document.createElement('video');
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;
    videoElement.id = 'video';

    // Añadir la fuente de video
    const sourceElement = document.createElement('source');
    sourceElement.src = '/assets/video/wallpapers/OB-wallpaper.mp4';
    sourceElement.type = 'video/mp4';
    videoElement.appendChild(sourceElement);

    // Estilos CSS del video
    videoElement.style.position = 'fixed';
    videoElement.style.top = '0';
    videoElement.style.left = '0';
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    videoElement.style.objectFit = 'cover';
    videoElement.style.zIndex = '-1';

    // Insertar el elemento de video en el DOM
    this.elRef.nativeElement.appendChild(videoElement);
  }
}
