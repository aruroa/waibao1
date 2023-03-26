import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FixApiService} from "../../../core/api/fix-api.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  count: number;
  state:number;
  userId :number;
  displayModal: boolean;
  fix:FormGroup;
  submitted: boolean = false;
  loginUser: any;
  constructor(private readonly formBuilder: FormBuilder,
              private readonly httpClient: HttpClient,
              private readonly _fixService: FixApiService,
              private _router: Router) { }
  get f() {
    return this.fix.controls;
  }
  ngOnInit() {
    this.userId=Number(localStorage.getItem('USERID'));
    this._fixService.countUser(this.userId).subscribe(res => {
      this.count = res;
    })
    this._fixService.getState(this.userId).subscribe(res => {
      this.state = res;
    })
    setTimeout(() => {
      console.log(this.count+"     "+this.state)
      if(this.count!=0){
        if(this.state==0){
          this.showBasicDialog()
      }}
    }, 100);


    this.fix = this.formBuilder.group(
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

  apply() {
    this.fix.value.userId=Number(localStorage.getItem('USERID'));
    console.log(this.fix.value)
    alert("已提交");
    this._router.navigate(['/homepage']);
    this._fixService.addFix(this.fix.value).subscribe();
      return;
    this.submitted = true;


  }
  showBasicDialog() {
    this.displayModal = true;
  }
}
