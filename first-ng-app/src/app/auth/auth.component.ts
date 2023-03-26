import {Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "primeng/api";
import {UserApiService} from "../core/api/user-api.service";
import {Route, Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../shared/model/user";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
import {UserIdService} from "../serves/user-id.service";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  loginForm: FormGroup;
  msgs: Message[] = [];
  users: User[] = [];
  userId = 0;
  constructor(private readonly formBuilder: FormBuilder,
              private readonly userService: UserApiService,
              private readonly _router: Router,
              private userIdService:UserIdService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  @Output() newItemEvent = new EventEmitter<number>();
  // @Output() change: EventEmitter<number> = new EventEmitter<number>();
  onLogin() {
    if (this.loginForm.invalid) {
      this.msgs = [{severity: 'error', detail: 'Login form invalid.'}];
    }
    this.userService.login(this.loginForm.value)
      .subscribe(result => {
        localStorage.setItem("USER", result)
        this.msgs = [{severity: 'success', detail: 'Login Success.'}];
        console.log(this.loginForm.value.username);
        this.userService.getUserByUsername(this.loginForm.value.username).subscribe((userId) => {
          this.userId=userId;
        })
        setTimeout(() => {
          this.newItemEvent.emit(this.userId);
          localStorage.setItem('USERID', this.userId.toString());
          this.userIdService.HaveUserId(this.userId);
          // console.log(this.userId);
          this._router.navigate(['/homepage'])
        }, 100);
      }, ({error}) => {
        this.msgs = [{severity: 'error', detail: error.message}];
      });
  }
}
