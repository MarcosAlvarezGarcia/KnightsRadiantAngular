import { Component, OnInit } from '@angular/core';
import { SurgeService } from '../../../services/surge/surge.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Surge } from '../../../classes/surge/surge';
import { Ideal } from '../../../classes/ideal/ideal';

@Component({
  selector: 'app-surge-update',
  templateUrl: './surge-update.component.html',
  styleUrl: './surge-update.component.css'
})
export class SurgeUpdateComponent implements OnInit{

  id: number = 0;
  surge: Surge = new Surge(0, '', '', Ideal.NO_IDEAL);
  constructor(private surgeService : SurgeService, private route : ActivatedRoute, private router : Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.surgeService.getSurgeById(this.id).subscribe(data => {
      this.surge = data;
    }, error => console.log(error));
  }

  updateSurge(){
    this.surgeService.updateSurge(this.id, this.surge).subscribe(
      data =>{
        this.router.navigate(['/knightsRadiant/surges']);
      }, error => console.log(error)
    );
  }

}
