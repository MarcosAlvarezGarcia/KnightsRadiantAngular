import { Component, OnInit } from '@angular/core';
import { WOKService } from '../../../services/wallpaper/wok.service';

@Component({
  selector: 'app-wok',
  templateUrl: './wok.component.html',
  styleUrl: './wok.component.css'
})
export class WOKComponent implements OnInit {

  constructor(public wokService: WOKService) { }

  ngOnInit(): void {
  }

}