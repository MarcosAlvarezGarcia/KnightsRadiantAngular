import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'knights_radiant';

  constructor() {
  }

  @HostListener('window:load', ['$event'])
  loadHandler(event: Event) {
    // Variable en true para conservar los datos del usuario al cargar la página
    localStorage.setItem('shouldKeepUserData', 'true');
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: BeforeUnloadEvent) {
    // Verificamos si la página se está cerrando o si se está recargando
    const isReloading = event.type === 'beforeunload';
    if (isReloading) {
      // Si la página se está recargando, establecemos la bandera en 'true'
      localStorage.setItem('shouldKeepUserData', 'true');
    } else {
      // Si la página se está cerrando, establecemos la bandera en 'false'
      localStorage.setItem('shouldKeepUserData', 'false');
      localStorage.removeItem('userData');
      localStorage.removeItem('userToken');
    }
  }


  ngOnInit(): void {

  }
}
