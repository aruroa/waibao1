import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FixApiService} from "../../../core/api/fix-api.service";
import {Fix} from "../../../shared/model/fix";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  userId :number;
  fix: Fix;
  constructor(private readonly httpClient: HttpClient,
              private readonly _fixService: FixApiService,
              private _router: Router) { }
  ngOnInit() {
    this.userId=Number(localStorage.getItem('USERID'));
    this._fixService.getFixDetail(this.userId).subscribe(res => {
      this.fix = res;
    })
  }

  complete() {

    alert("已确认完成");
    this._fixService.end(this.fix.id).subscribe(res => {
    })
    this._router.navigate(['/homepage'])
  }


  readd() {
    alert("已重新报修");
    this._router.navigate(['/homepage']);
    this._fixService.readd(this.fix.id).subscribe(res => {
    })
  }
}
