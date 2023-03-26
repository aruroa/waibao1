import { Component, OnInit } from '@angular/core';
import {Complain} from "../../../shared/model/complain";
import {HttpClient} from "@angular/common/http";
import {ComplainApiService} from "../../../core/api/complain-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-handle',
  templateUrl: './handle.component.html',
  styleUrls: ['./handle.component.css']
})
export class HandleComponent implements OnInit {
  displayModal: boolean;
  userId :number;
  complain: Complain;
  count: number;
  state:number;
  constructor(private readonly httpClient: HttpClient,
              private readonly _complainService: ComplainApiService,
              private router: Router) { }

  ngOnInit() {
    this.userId=Number(localStorage.getItem('USERID'));
    this._complainService.getComplainDetail(this.userId).subscribe(res => {
      this.complain = res;
    })
    this._complainService.countUser(this.userId).subscribe(res => {
      this.count = res;
    })
    this._complainService.getState(this.userId).subscribe(res => {
      this.state = res;
    })

  }

  nextPage() {
    this._complainService.confirm(this.complain.id).subscribe(res => {
    })
    this.router.navigate(['/homepage'])
  }

  readd() {
    this._complainService.readd(this.complain.id).subscribe(res => {
    })
    this.router.navigate(['/homepage'])
  }
}
