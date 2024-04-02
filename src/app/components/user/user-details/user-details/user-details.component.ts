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

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{


  loadPage: boolean = false;

  errorMessage:String="";
  user?:User;
  id?: number = this.user?.id;

  userLoginOn:boolean=false;
  editMode:boolean=false;

  normalColor: string = '#866c46';
  orderColor: String = "";
  orderId: number = 0;

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
    'assets/img/Orders_Glyphs/01_Windrunners_glyph.jpg',
    'assets/img/Orders_Glyphs/02_Skybreaker_glyph.jpg',
    'assets/img/Orders_Glyphs/03_Dustbringer_glyph.jpg',
    'assets/img/Orders_Glyphs/04_Edgedancer_glyph.jpg',
    'assets/img/Orders_Glyphs/05_Truthwatcher_glyph.jpg',
    'assets/img/Orders_Glyphs/06_Lightweaver_glyph.jpg',
    'assets/img/Orders_Glyphs/07_Elsecaller_glyph.jpg',
    'assets/img/Orders_Glyphs/08_Willshaper_glyph.jpg',
    'assets/img/Orders_Glyphs/09_Stoneward_glyph.jpg',
    'assets/img/Orders_Glyphs/10_Bondsmith_glyph.jpg'
  ];
  surgesGlyph: string[] = [
    'assets/img/Surges_Logo/01_windrunner_placard.jpg',
    'assets/img/Surges_Logo/02_skybreaker_placard.jpg',
    'assets/img/Surges_Logo/03_dustbringer_placard.jpg',
    'assets/img/Surges_Logo/04_edgedancer_placard.jpg',
    'assets/img/Surges_Logo/05_truthwatcher_placard.jpg',
    'assets/img/Surges_Logo/06_lightweaver_placard.jpg',
    'assets/img/Surges_Logo/07_elsecaller_placard.jpg',
    'assets/img/Surges_Logo/08_willshaper_placard.jpg',
    'assets/img/Surges_Logo/09_stoneward_placard.jpg',
    'assets/img/Surges_Logo/10_bondsmith_placard.jpg'
  ];

  registerForm=this.formBuilder.group({
      id:[''],
      knightRadiant:['', Validators.required]
  })

  constructor(private userService: UserService, private krService: KnightRadiantService, private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {

      this.userService.getUserByEmail(loginService.currentUserEmail).subscribe({
          next: (userData) => {
              this.user=userData;
              if (this.user.knightRadiant && this.user.knightRadiant.radiantOrder) {
                this.orderColor = this.user.knightRadiant.radiantOrder.color;
                this.orderId = this.user.knightRadiant.radiantOrder.id;
                console.info(this.orderColor)
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
                  this.router.navigate(['knightsRadiant/knight-radiant/radiant-order-form']);
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
        this.router.navigate(['knightsRadiant/knight-radiant/radiant-order-form']);
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
