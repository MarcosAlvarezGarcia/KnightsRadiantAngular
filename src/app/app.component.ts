import { Component, OnInit } from '@angular/core';
import { WOKService } from './services/wallpaper/wok.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'knights_radiant';
  
  constructor(wokservice : WOKService) {
    wokservice.play();
  }

  ngOnInit(): void {
    
  }
}
