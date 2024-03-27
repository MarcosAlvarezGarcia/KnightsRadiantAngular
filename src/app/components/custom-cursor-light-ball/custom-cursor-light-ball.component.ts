import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-cursor-light-ball',
  templateUrl: './custom-cursor-light-ball.component.html',
  styleUrl: './custom-cursor-light-ball.component.css'
})
export class CustomCursorLightBallComponent {
  mouseX = 0;
  mouseY = 0;
  trail: { x: number, y: number }[] = [];

  @ViewChild('cursor') cursor!: ElementRef;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    // Agregar las coordenadas al rastro de luz
    this.trail.push({ x: this.mouseX, y: this.mouseY });

    // Mantener solo las últimas coordenadas para el rastro de luz
    const trailLength = 10;
    if (this.trail.length > trailLength) {
      this.trail.shift();
    }
  }
  get trailPoints(): string {
    return this.trail.map(coord => `${coord.x},${coord.y}`).join(' ');
  }
  
}