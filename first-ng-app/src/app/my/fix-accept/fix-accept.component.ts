import { Component, OnInit } from '@angular/core';
import {ConfirmationService, Message} from "primeng/api";
import {Fix} from "../../shared/model/fix";
import {FixApiService} from "../../core/api/fix-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-fix-accept',
  templateUrl: './fix-accept.component.html',
  styleUrls: ['./fix-accept.component.css'],
  providers: [ConfirmationService]
})
export class FixAcceptComponent implements OnInit {
  term:number=1;
  msgs0: Message[] = [{summary: "个未受理报修", severity: "info"}]
  msgs1: Message[] = [{summary: "个未完成维修", severity: "info"}]
  msgs2: Message[] = [{summary: "个待确认完成", severity: "info"}]
  msgs3: Message[] = [{summary: "个待填写报告", severity: "info"}]
  msgs4: Message[] = [{summary: "个已完成维修", severity: "info"}]
  msgs5: Message[] = [{summary: "个已结束维修", severity: "info"}]
  fixs0: Fix[] = [];
  fixs1: Fix[] = [];
  fixs2: Fix[] = [];
  fixs3: Fix[] = [];
  fixs4: Fix[] = [];
  fixs5: Fix[] = [];
  userId=Number(localStorage.getItem('USERID'));
  notaccept: boolean;
  constructor(private readonly _fixApiService: FixApiService,
              private readonly _confirmationService : ConfirmationService,
              private readonly _router: Router,
  ) {
  }
  done(id: number, event: any) {
    this._confirmationService.confirm({
      target: event.target,
      message: '确定已处理完成该报修？',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //confirm action
        this._fixApiService.done(id).subscribe({
          next: () => {
            // reload user list
            this.ngOnInit();
          }
        })
        this._router.navigate(['/homepage']);
      },
      reject: () => {
      }
    })
  }

  ngOnInit(): void {
    this._fixApiService.count(0,this.userId).subscribe(count => {
      this.msgs0 = [{summary: count + `个未受理报修`, severity: "info"}];
    })
    this._fixApiService.count(1,this.userId).subscribe(count => {
      this.msgs1 = [{summary: count + `个未完成维修`, severity: "info"}];
    })
    this._fixApiService.count(2,this.userId).subscribe(count => {
      this.msgs2 = [{summary: count + `个待确认完成`, severity: "info"}];
    })
    this._fixApiService.count(3,this.userId).subscribe(count => {
      this.msgs3 = [{summary: count + ` 个待填写报告`, severity: "info"}];
    })
    this._fixApiService.count(4,this.userId).subscribe(count => {
      this.msgs4 = [{summary: count + ` 个已完成维修`, severity: "info"}];
    })
    this._fixApiService.count(5,this.userId).subscribe(count => {
      this.msgs5 = [{summary: count + ` 个已完成维修`, severity: "info"}];
    })
    this._fixApiService.getFix(0,this.userId).subscribe((fixs0) => {
      this.fixs0 = fixs0;
    })
    this._fixApiService.getFix(1,this.userId).subscribe((fixs1) => {
      this.fixs1 = fixs1;
    })
    this._fixApiService.getFix(2,this.userId).subscribe((fixs2) => {
      this.fixs2 = fixs2;
    })
    this._fixApiService.getFix(3,this.userId).subscribe((fixs3) => {
      this.fixs3 = fixs3;
    })
    this._fixApiService.getFix(4,this.userId).subscribe((fixs4) => {
      this.fixs4 = fixs4;

    })
    this._fixApiService.getFix(5,this.userId).subscribe((fixs5) => {
      this.fixs5 = fixs5;
    })
  }
}
