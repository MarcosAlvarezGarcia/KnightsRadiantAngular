import { Component, OnInit } from '@angular/core';
import { RadiantOrder } from '../../../classes/radiant-order/radiant-order';
import { RadiantOrderService } from '../../../services/radiant-order/radiant-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radiant-order-list',
  templateUrl: './radiant-order-list.component.html',
  styleUrl: './radiant-order-list.component.css'
})
export class RadiantOrderListComponent implements OnInit {

  radiantOrders : RadiantOrder [] = [];

  constructor(private radiantOrderService : RadiantOrderService, private router : Router){}
  ngOnInit(): void {
    this.listRadiantOrders();
  }

  listRadiantOrders(){
    this.radiantOrderService.getRadiantOrderList().subscribe(
      data => {
        this.radiantOrders = data;
        console.log(this.radiantOrders);
      }
    );
  }

  updateSurge(id : number){
    this.router.navigate(['knightsRadiant/RadiantOrders/update', id]);
  }

  deleteSurge(id : number){
    console.log(id);
    this.radiantOrderService.deleteRadiantOrder(id).subscribe(
      ()=> this.listRadiantOrders()
    );
  }
}
