import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {SatifyApiService} from "../../core/api/satify-api.service";
import {Activity} from "../../shared/model/activity";

@Component({
  selector: 'app-satify-fill',
  templateUrl: './satify-fill.component.html',
  styleUrls: ['./satify-fill.component.css']
})
export class SatifyFillComponent implements OnInit {
  term:number=1;
  val1: number=0;
  val2: number=0;
  val3: number=0;
  val4: number=0;
  val5: number=0;
  loginUser: any;
  msg: string;
  satify: FormGroup;
  constructor( private readonly formBuilder: FormBuilder,
               private readonly _router: Router,
               private readonly httpClient: HttpClient,
               private _satifyService:SatifyApiService) {
      this.satify = this.formBuilder.group(
     {
      userId: [''],
      room: [''],
      phoneNum: [''],
       question1: [''],
       question2: [''],
       question3: [''],
       question4: [''],
       question5: [''],
       term: [''],
    },
  );}
  get f() {
    return this.satify.controls;
  }
  ngOnInit(): void {
    this.loginUser = localStorage.getItem("USER");

  }
  addSatify() {
    console.log(this.val2);
    console.log(this.satify.value.question2);
    this.satify.value.userId=localStorage.getItem('USERID');
    // this.satify.value.question1=this.val1;
    // this.satify.value.question2=this.val2;
    // this.satify.value.question3=this.val3;
    // this.satify.value.question4=this.val4;
    // this.satify.value.question5=this.val5;
    this.satify.value.term=this.term;
    this._satifyService.addSatify(this.satify.value).subscribe();
    alert("填写成功，感谢支持")
    this._router.navigate(['/homepage'])
  }
}
