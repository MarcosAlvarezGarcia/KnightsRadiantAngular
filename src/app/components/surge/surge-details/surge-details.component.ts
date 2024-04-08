import { Component, OnInit } from '@angular/core';
import { SurgeService } from '../../../services/surge/surge.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Surge } from '../../../classes/surge/surge';
import { Ideal } from '../../../classes/ideal/ideal';
import {PowersService} from "../../../services/user/powers.service";
import {ViewsStatesService} from "../../../services/viewsStates/views-states.service";

@Component({
  selector: 'app-surge-details',
  templateUrl: './surge-details.component.html',
  styleUrl: './surge-details.component.css'
})
export class SurgeDetailsComponent {
  id: number = 0;
  surge: any;

  surges: string[] = [
    'assets/img/sb-surges/sb-01-adhesion.jpg',
    'assets/img/sb-surges/sb-02-gravitation.jpg',
    'assets/img/sb-surges/sb-03-division.jpg',
    'assets/img/sb-surges/sb-04-abrasion.jpg',
    'assets/img/sb-surges/sb-05-progression.jpg',
    'assets/img/sb-surges/sb-06-illumination.jpg',
    'assets/img/sb-surges/sb-07-transformation.jpg',
    'assets/img/sb-surges/sb-08-transportation.jpg',
    'assets/img/sb-surges/sb-09-cohesion.jpg',
    'assets/img/sb-surges/sb-10-tension.jpg'
  ];

  ideals: string[] = [
    'beginning of the order',
    'First Ideal',
    'Second Ideal',
    'Third Ideal',
    'Fourth Ideal',
    'Fifth Ideal'
  ]

  constructor(private powersService: PowersService, public viewsStatesService: ViewsStatesService) { }

  ngOnInit(): void {
    this.powersService.surge$.subscribe(surge => {
      this.surge = surge;
    });
  }

  back() {
    this.viewsStatesService.setViewProfile(true);
    this.viewsStatesService.setViewOrderDetails(false);
    this.viewsStatesService.setViewSurgeDetails(false);
    this.viewsStatesService.setViewShardbladeDetails(false);
    this.viewsStatesService.setViewShardplateDetails(false);
  }

}
