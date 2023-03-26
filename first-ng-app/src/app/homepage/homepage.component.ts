import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "primeng/api";
import {UserApiService} from "../core/api/user-api.service";
import {HttpClient} from "@angular/common/http";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  loginForm: FormGroup;
  msgs: Message[] = [];

  constructor(private readonly formBuilder: FormBuilder,
              private readonly userService: UserApiService,
              private readonly _router: Router,
              private readonly httpClient: HttpClient) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.msgs = [{severity: 'error', detail: 'Login form invalid.'}];
    }
    this.userService.login(this.loginForm.value)
      .subscribe(result => {
        localStorage.setItem("USER", result)
        this.msgs = [{severity: 'success', detail: 'Login Success.'}];
        this._router.navigate(['/dashboard'])
      }, ({error}) => {
        this.msgs = [{severity: 'error', detail: error.message}];
      });
  }
}
