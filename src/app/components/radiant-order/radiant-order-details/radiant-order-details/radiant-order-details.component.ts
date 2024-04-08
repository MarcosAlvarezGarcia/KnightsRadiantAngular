import { Component } from '@angular/core';
import {RadiantOrder} from "../../../../classes/radiant-order/radiant-order";
import {PowersService} from "../../../../services/user/powers.service";
import {ViewsStatesService} from "../../../../services/viewsStates/views-states.service";

@Component({
  selector: 'app-radiant-order-details',
  templateUrl: './radiant-order-details.component.html',
  styleUrl: './radiant-order-details.component.css'
})
export class RadiantOrderDetailsComponent {
  order: any;

  orders: string[] = [
    'assets/img/sb-orders/sb-01-windrunners.jpg',
    'assets/img/sb-orders/sb-02-skybreakers.jpg',
    'assets/img/sb-orders/sb-03-dustbringers.jpg',
    'assets/img/sb-orders/sb-04-edgedancers.jpg',
    'assets/img/sb-orders/sb-05-truthwatchers.jpg',
    'assets/img/sb-orders/sb-06-lightweavers.jpg',
    'assets/img/sb-orders/sb-07-elsecallers.jpg',
    'assets/img/sb-orders/sb-08-willshapers.jpg',
    'assets/img/sb-orders/sb-09-stonewards.jpg',
    'assets/img/sb-orders/sb-10-bondsmiths.jpg'
  ];



  constructor(private powersService: PowersService, public viewsStatesService: ViewsStatesService) { }

  ngOnInit(): void {
    this.powersService.order$.subscribe(order => {
      this.order = order;
    });
  }

  back() {
    this.viewsStatesService.setViewOrderDetails(false);
    this.viewsStatesService.setViewProfile(true);
  }

}
