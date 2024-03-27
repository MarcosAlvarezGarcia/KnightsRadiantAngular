import { Component, OnInit } from '@angular/core';
import { SurgeService } from '../../../services/surge/surge.service';
import { Router } from '@angular/router';
import { Surge } from '../../../classes/surge/surge';

@Component({
  selector: 'app-surge-list',
  templateUrl: './surge-list.component.html',
  styleUrl: './surge-list.component.css'
})
export class SurgeListComponent implements OnInit {

  surges : Surge [] = [];

  constructor(private surgeService : SurgeService, private router : Router){}

  ngOnInit(): void {
    this.listSurges();
  }

  listSurges(){
    this.surgeService.getSurgeList().subscribe(
      data => {
        this.surges = data;
        console.log(this.surges);
      }
    );
  }

  updateSurge(id : number){
    this.router.navigate(['knightsRadiant/surges/update', id]);
  }

  deleteSurge(id : number){
    console.log(id);
    this.surgeService.deleteSurge(id).subscribe(
      ()=> this.listSurges()
    );
  }
}
