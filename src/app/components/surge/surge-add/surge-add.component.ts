import { Component, OnInit } from '@angular/core';
import { Surge } from '../../../classes/surge/surge';
import { SurgeService } from '../../../services/surge/surge.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ideal } from '../../../classes/ideal/ideal';

@Component({
  selector: 'app-surge-add',
  templateUrl: './surge-add.component.html',
  styleUrl: './surge-add.component.css'
})
export class SurgeAddComponent implements OnInit{
  surge:Surge = new Surge(0, '', '', Ideal.NO_IDEAL);
  id : number = 0;
  name : string = '';
  description : string = '';
  ideal : Ideal = Ideal.NO_IDEAL;

  constructor(private surgeService : SurgeService, private router : Router, private activatedRoute : ActivatedRoute){ }

  ngOnInit(): void {
    this.upload();
  }
  
  createSurge(){
    let surge = new Surge(this.id, this.name, this.description, this.ideal);
    console.log(surge);
    this.surgeService.createSurge(surge).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['knightsRadiant/surges']);
      }
    )
  }
  upload():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.surgeService.getSurgeById(id).subscribe(
            es=>this.surge=es
          )
        }
      }
    )
  }
}
