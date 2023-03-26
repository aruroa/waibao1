import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ComplainApiService} from "../../../core/api/complain-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lodge',
  templateUrl: './lodge.component.html',
  styleUrls: ['./lodge.component.css']
})
export class LodgeComponent implements OnInit {
  count: number;
  state:number;
  userId :number;
  displayModal: boolean;
  complain:FormGroup;
  submitted: boolean = false;
  loginUser: any;
  constructor(private readonly formBuilder: FormBuilder,
              private readonly httpClient: HttpClient,
              private readonly _complainService: ComplainApiService,
              private router: Router) { }
  get f() {
    return this.complain.controls;
  }
  ngOnInit() {
    this.userId=Number(localStorage.getItem('USERID'));
    this._complainService.countUser(this.userId).subscribe(res => {
      this.count = res;
    })
    this._complainService.getState(this.userId).subscribe(res => {
      this.state = res;
    })
    setTimeout(() => {
      console.log(this.count+"     "+this.state)
      if(this.count!=0){
        if(this.state==0){
          this.showBasicDialog()
        }}
    }, 100);


    this.complain = this.formBuilder.group(
      {
        userId: [''],
        acceptId: [''],
        orderTime: [''],
        room: [''],
        content: [''],
        state: [''],
        report: [''],
      },
    );
  }

  nextStep() {
    this.complain.value.userId=Number(localStorage.getItem('USERID'));
    console.log(this.complain.value)
    this._complainService.addComplain(this.complain.value).subscribe();
    return;
    this.submitted = true;
  }
  showBasicDialog() {
    this.displayModal = true;
  }

}
