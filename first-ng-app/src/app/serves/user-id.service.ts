import { Injectable } from '@angular/core';
import {UserApiService} from "../core/api/user-api.service";

@Injectable({
  providedIn: 'root'
})
export class UserIdService {
  userId :number;
  userType :number;
  constructor(private _userService:UserApiService) { }
  HaveUserId(num:number){
    this.userId=num;
    this._userService.getType(this.userId).subscribe(
      (page: number) => {
        this.userType=page;
      });
    setTimeout(() => {
      localStorage.setItem('USERID', this.userId.toString());
      console.log(this.userType);
    }, 100);
  }

}
