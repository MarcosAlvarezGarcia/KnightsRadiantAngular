import { Component, OnInit } from '@angular/core';
import { SurgeService } from '../../../services/surge/surge.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Surge } from '../../../classes/surge/surge';
import { Ideal } from '../../../classes/ideal/ideal';

@Component({
  selector: 'app-surge-details',
  templateUrl: './surge-details.component.html',
  styleUrl: './surge-details.component.css'
})
export class SurgeDetailsComponent {
  id: number = 0;
  surge: Surge = new Surge(0, '', '', 0);
  surges : Surge [] = [];

  constructor(private surgeService : SurgeService, private route : ActivatedRoute, private router : Router) {}



    ngOnInit(): void {
      this.getSurgeById(this.id);
    }

    getSurgeById(id : number){
      this.id = this.route.snapshot.params['id'];
      this.surgeService.getSurgeById(this.id).subscribe(data => {
        this.surge = data;
      }, error => console.log(error));
    }

    updateSurge(id : number){
      this.router.navigate(['knightsRadiant/surges/update', id]);
    }

    listSurges(){
      this.surgeService.getSurgeList().subscribe(
        data => {
          this.surges = data;
          console.log(this.surges);
        }
      );
    }

    deleteSurge(id : number){
      console.log(id);
      this.surgeService.deleteSurge(id).subscribe(
        ()=> {
          this.listSurges();
          this.router.navigate(['knightsRadiant/surges'])}
      );
    }

}
