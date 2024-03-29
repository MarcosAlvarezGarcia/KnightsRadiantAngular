import {Component, OnInit} from '@angular/core';
import {User} from "../../../../services/auth/user";
import {UserService} from "../../../../services/user/user.service";
import {FormBuilder, Validators} from "@angular/forms";
import {LoginService} from "../../../../services/auth/login.service";
import {environment} from "../../../../../environments/environment";
import {Role} from "../../../../classes/role/role";
import {KnightRadiant} from "../../../../classes/knight-radiant/knight-radiant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{

  errorMessage:String="";
  user?:User;
  id?: number = this.user?.id;

  userLoginOn:boolean=false;
  editMode:boolean=false;

  registerForm=this.formBuilder.group({
      id:[''],
      knightRadiant:['', Validators.required]
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {

      this.userService.getUserByEmail(loginService.currentUserEmail).subscribe({
          next: (userData) => {
              this.user=userData;
              let userId = userData.id.toString();
              this.registerForm.controls.id.setValue(userData.id.toString());
              //this.registerForm.controls.knightRadiant.setValue(userData.knightRadiant.radiantOrder?.name);
          },
          error: (errorData) => {
              this.errorMessage=errorData
          },
          complete: () => {
              console.info("User Data ok");
          }
      })



      this.loginService.userLoginOn.subscribe({
          next:(userLoginOn)=> {
            this.userLoginOn=userLoginOn;
          }
      })
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
              },
              error:(errorData)=> console.error(errorData)
          })
      }
  }
}
