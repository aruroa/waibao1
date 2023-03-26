import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ComplainApiService} from "../../../core/api/complain-api.service";
import {Complain} from "../../../shared/model/complain";

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent implements OnInit {


  constructor(private readonly router: Router,
              private readonly httpClient: HttpClient,
              private readonly _complainService: ComplainApiService) {

  }
  userId :number;
  complain: Complain;

  ngOnInit() {
    this.userId=Number(localStorage.getItem('USERID'));
    this._complainService.getComplainDetail(this.userId).subscribe(res => {
      this.complain = res;
    })
  }

}
