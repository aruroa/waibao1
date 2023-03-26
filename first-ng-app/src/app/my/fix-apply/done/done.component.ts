import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FixApiService} from "../../../core/api/fix-api.service";
import {Fix} from "../../../shared/model/fix";


@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  displayModal: boolean;
  userId :number;
  fix: Fix;
  count: number;
  state:number;
  constructor(private readonly httpClient: HttpClient,
              private readonly _fixService: FixApiService,
              private _router: Router) { }

  ngOnInit() {
    this.userId=Number(localStorage.getItem('USERID'));
    this._fixService.getFixDetail(this.userId).subscribe(res => {
      this.fix = res;
    })
    this._fixService.countUser(this.userId).subscribe(res => {
      this.count = res;
    })
    this._fixService.getState(this.userId).subscribe(res => {
      this.state = res;
    })
    setTimeout(() => {
      if(this.count!=0){
        if(this.state==3){
         this.showBasicDialog();
        }
      }
    }, 100);


  }

  nextPage() {
    console.log(this.fix.id);
    alert("已确认");
    this._router.navigate(['/homepage']);
    this._fixService.confirm(this.fix.id).subscribe(res => {
    })
  }

  showBasicDialog() {
    this.displayModal = true;
  }

}
