import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FixApiService} from "../../../core/api/fix-api.service";
import {HttpClient} from "@angular/common/http";
import {Fix} from "../../../shared/model/fix";

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  constructor(private readonly router: Router,
              private readonly httpClient: HttpClient,
              private readonly _fixService: FixApiService) {

  }
   userId :number;
   fix: Fix;

  ngOnInit() {
    this.userId=Number(localStorage.getItem('USERID'));
    this._fixService.getFixDetail(this.userId).subscribe(res => {
      this.fix = res;
    })
  }





}
