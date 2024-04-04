import {Component, OnInit} from '@angular/core';
import {User} from "../../../../services/auth/user";
import {UserService} from "../../../../services/user/user.service";
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../../../../services/auth/login.service";
import {environment} from "../../../../../environments/environment";
import {Role} from "../../../../classes/role/role";
import {KnightRadiant} from "../../../../classes/knight-radiant/knight-radiant";
import {Router} from "@angular/router";
import {KnightRadiantService} from "../../../../services/knightRadiant/knight-radiant.service";
import {Ideal} from "../../../../classes/ideal/ideal";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{


  loadPage: boolean = false;
  orderForm: boolean = false;

  errorMessage:String="";
  user?:User;
  id?: number = this.user?.id;
  radiantId : number = 0;
  radiantFirstIdeal: string = "";
  radiantSecondIdeal: string = "";
  radiantThirdIdeal: string = "";
  radiantFourthIdeal: string = "";
  radiantFifthIdeal: string = "";

  // Ideals
  isRadiantIdeal: boolean = false;
  isRadiantFirstIdeal: boolean = false;
  isRadiantSecondIdeal: boolean = false;
  isRadiantThirdIdeal: boolean = false;
  isRadiantFourthIdeal: boolean = false;
  isRadiantFifthIdeal: boolean = false;

  userLoginOn:boolean=false;
  editMode:boolean=false;

  normalColor: string = '#866c46';
  orderColor: String = "";
  orderId: number = 0;

  // Surges availables
  firstSurgeText: string = "";
  secondSurgeText: string = "";
  firstSurgeGlyph : number = 0;
  secondSurgeGlyph : number = 0;


    // Shards available
    shardblade: string = "";
    shardplate: string = "";
    shardbladeIdealNumber: number = 3;
    shardplateIdealNumber: number = 4;


  // Images

  ordersLogo: string[] = [
    'assets/img/Orders_Logo/01_windrunner_placard.jpg',
    'assets/img/Orders_Logo/02_skybreaker_placard.jpg',
    'assets/img/Orders_Logo/03_dustbringer_placard.jpg',
    'assets/img/Orders_Logo/04_edgedancer_placard.jpg',
    'assets/img/Orders_Logo/05_truthwatcher_placard.jpg',
    'assets/img/Orders_Logo/06_lightweaver_placard.jpg',
    'assets/img/Orders_Logo/07_elsecaller_placard.jpg',
    'assets/img/Orders_Logo/08_willshaper_placard.jpg',
    'assets/img/Orders_Logo/09_stoneward_placard.jpg',
    'assets/img/Orders_Logo/10_bondsmith_placard.jpg'
  ];
  ordersGlyph: string[] = [
    'assets/img/Orders_Glyphs/01_Windrunners_glyph.svg',
    'assets/img/Orders_Glyphs/02_Skybreakers_glyph.svg',
    'assets/img/Orders_Glyphs/03_Dustbringers_glyph.svg',
    'assets/img/Orders_Glyphs/04_Edgedancers_glyph.svg',
    'assets/img/Orders_Glyphs/05_Truthwatchers_glyph.svg',
    'assets/img/Orders_Glyphs/06_Lightweavers_glyph.svg',
    'assets/img/Orders_Glyphs/07_Elsecallers_glyph.svg',
    'assets/img/Orders_Glyphs/08_Willshapers_glyph.svg',
    'assets/img/Orders_Glyphs/09_Stonewards_glyph.svg',
    'assets/img/Orders_Glyphs/10_Bondsmiths_glyph.svg'
  ];
  surgesGlyph: string[] = [
    'assets/img/Surges_Glyphs/01_Adhesion_Surge-glyph.svg',
    'assets/img/Surges_Glyphs/02_Gravitation_Surge-glyph.svg',
    'assets/img/Surges_Glyphs/03_Division_Surge-glyph.svg',
    'assets/img/Surges_Glyphs/04_Abrasion_Surge-glyph.svg',
    'assets/img/Surges_Glyphs/05_Progression and Regrowth_Surge-glyph.svg',
    'assets/img/Surges_Glyphs/06_Illumination_Surge-glyph.svg',
    'assets/img/Surges_Glyphs/07_Transformation_Surge-glyph.svg',
    'assets/img/Surges_Glyphs/08_Transportation_Surge-glyph.svg',
    'assets/img/Surges_Glyphs/09_Cohesion_Surge-glyph.svg',
    'assets/img/Surges_Glyphs/10_Tension_Surge-glyph.svg'
  ];

  registerForm=this.formBuilder.group({
      id:[''],
      knightRadiant:['', Validators.required]
  })

  constructor(private userService: UserService, private krService: KnightRadiantService, private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {

      //this.userService.getUserByEmail(this.loginService.currentUserEmail).subscribe({
      this.userService.getUserByEmail("carlos@gmail.com").subscribe({
          next: (userData) => {
              this.user=userData;
              if (this.user.knightRadiant && this.user.knightRadiant.radiantOrder) {
                this.orderColor = this.user.knightRadiant.radiantOrder.color;
                this.radiantId = this.user.knightRadiant.id;
                this.orderId = this.user.knightRadiant.radiantOrder.id;
                this.radiantFirstIdeal = this.user.knightRadiant.firstIdeal;
                this.radiantSecondIdeal = this.user.knightRadiant.secondIdeal;
                this.radiantThirdIdeal = this.user.knightRadiant.thirdIdeal;
                this.radiantFourthIdeal = this.user.knightRadiant.fourthIdeal;
                this.radiantFifthIdeal = this.user.knightRadiant.fifthIdeal;

                if (this.user.knightRadiant.ideal == 1 || this.user.knightRadiant.ideal == 2 || this.user.knightRadiant.ideal == 3 || this.user.knightRadiant.ideal == 4 || this.user.knightRadiant.ideal == 5) {
                  this.isRadiantIdeal = true;
                }
                if (this.user.knightRadiant.ideal == 1) {
                  this.isRadiantFirstIdeal = true;
                }
                if (this.user.knightRadiant.ideal == 2) {
                  this.isRadiantFirstIdeal = true;
                  this.isRadiantSecondIdeal = true;
                }
                if (this.user.knightRadiant.ideal == 3) {
                  this.isRadiantFirstIdeal = true;
                  this.isRadiantSecondIdeal = true;
                  this.isRadiantThirdIdeal = true;
                }
                if (this.user.knightRadiant.ideal == 4) {
                  this.isRadiantFirstIdeal = true;
                  this.isRadiantSecondIdeal = true;
                  this.isRadiantThirdIdeal = true;
                  this.isRadiantFourthIdeal = true;
                }
                if (this.user.knightRadiant.ideal == 5) {
                  this.isRadiantFirstIdeal = true;
                  this.isRadiantSecondIdeal = true;
                  this.isRadiantThirdIdeal = true;
                  this.isRadiantFourthIdeal = true;
                  this.isRadiantFifthIdeal = true;
                }

                if (this.user.knightRadiant.ideal >= this.user.knightRadiant.radiantOrder.surges[0].ideal) {
                  this.firstSurgeText = "Available";
                }
                else {
                  this.firstSurgeText = "Locked";
                }
                if (this.user.knightRadiant.ideal >= this.user.knightRadiant.radiantOrder.surges[1].ideal) {
                    this.secondSurgeText = "Available";
                }
                else {
                    this.secondSurgeText = "Locked";
                }
                if (this.user.knightRadiant.ideal >= this.shardbladeIdealNumber) {
                  this.shardblade = "Available";
                }
                else this.shardblade = "Locked";
                if (this.user.knightRadiant.ideal >= this.shardplateIdealNumber) {
                  this.shardplate = "Available";
                }
                else this.shardplate = "Locked";
                if (this.orderId == 1) {
                  this.firstSurgeGlyph = 0;
                  this.secondSurgeGlyph = 1;
                }
                else if (this.orderId == 2) {
                  this.firstSurgeGlyph = 1;
                  this.secondSurgeGlyph = 2;
                }
                else if (this.orderId == 3) {
                    this.firstSurgeGlyph = 2;
                    this.secondSurgeGlyph = 3;
                }
                else if (this.orderId == 4) {
                    this.firstSurgeGlyph = 3;
                    this.secondSurgeGlyph = 4;
                }
                else if (this.orderId == 5) {
                    this.firstSurgeGlyph = 4;
                    this.secondSurgeGlyph = 5;
                }
                else if (this.orderId == 6) {
                    this.firstSurgeGlyph = 5;
                    this.secondSurgeGlyph = 6;
                }
                else if (this.orderId == 7) {
                    this.firstSurgeGlyph = 6;
                    this.secondSurgeGlyph = 7;
                }
                else if (this.orderId == 8) {
                    this.firstSurgeGlyph = 7;
                    this.secondSurgeGlyph = 8;
                }
                else if (this.orderId == 9) {
                    this.firstSurgeGlyph = 8;
                    this.secondSurgeGlyph = 9;
                }
                else if (this.orderId == 10) {
                    this.firstSurgeGlyph = 9;
                    this.secondSurgeGlyph = 0;
                }
                console.info(this.firstSurgeGlyph)
                console.info(this.secondSurgeGlyph)
              } else {
                this.orderColor = ''; // Otra acción por defecto si es necesario
              }              let userId = userData.id.toString();
              this.registerForm.controls.id.setValue(userData.id.toString());
              //this.registerForm.controls.knightRadiant.setValue(userData.knightRadiant.radiantOrder?.name);
          },
          error: (errorData) => {
              this.errorMessage=errorData
          },
          complete: () => {
              console.info("User Data ok");
              if (this.user!.knightRadiant.radiantOrder == null){
                  console.info("no order asigned")
                  this.orderForm = true;
                  this.loadPage = false;
                  //this.router.navigate(['knightsRadiant/knight-radiant/radiant-order-form']);
              }
              else {
                  this.loadPage = true;
                  console.log("order asigned")
              }
          }
      })

      this.loginService.userLoginOn.subscribe({
          next:(userLoginOn)=> {
            this.userLoginOn=userLoginOn;
          }
      })

    document.documentElement.style.setProperty('--container-info-color', this.normalColor);
    document.documentElement.style.setProperty('--progress-color', this.normalColor);

  }


    setIdeal(ideal: number){
        this.krService.setIdeal(this.radiantId).subscribe(
            response => {
                console.log("Next Ideal:", response);
            },
            error => {
                console.error('Error al subir de ideal', error);
            }
        )
    }

    setMissionsCompleted(id: number): void {
        this.krService.setMissionsCompleted(id).subscribe(
            response => {
                console.log('Misiones completadas establecidas correctamente:', response);
                // Manejar la respuesta si es necesario
            },
            error => {
                console.error('Error al establecer misiones completadas:', error);
                // Manejar el error si es necesario
            }
        );
    }



    setRadiantOrder(){
      this.orderForm = true;
      this.loadPage = false;
      //this.router.navigate(['knightsRadiant/knight-radiant/radiant-order-form']);
    }

    logout()
    {
        this.loginService.logout();
        this.router.navigate(['knightsRadiant/home'])
    }

  ngOnInit() {

  }

    get radiantOrder()
  {
    return this.registerForm.controls.knightRadiant;
  }

  savePersonalDetailsData()
  {
      if (this.registerForm.valid)
      {
          this.userService.updateUser(this.registerForm.value as unknown as User).subscribe({
              next:() => {
                  this.editMode=false;
                  this.user=this.registerForm.value as unknown as User;
              }, error:(errorData)=> console.error(errorData)
          })
      }
  }
}
