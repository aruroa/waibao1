import { Component, OnInit } from '@angular/core';
import {ConfirmationService, Message} from "primeng/api";
import {Complain} from "../../shared/model/complain";
import {ComplainApiService} from "../../core/api/complain-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-complaint-accept',
  templateUrl: './complaint-accept.component.html',
  styleUrls: ['./complaint-accept.component.css'],
  providers: [ConfirmationService]
})
export class ComplaintAcceptComponent implements OnInit {
  term:number=1;
  msgs1: Message[] = [{summary: "个未受理投诉", severity: "info"}]
  msgs2: Message[] = [{summary: "个未完成投诉", severity: "info"}]
  msgs3: Message[] = [{summary: "个待确认投诉", severity: "info"}]
  msgs4: Message[] = [{summary: "个已完成投诉", severity: "info"}]
  complains0: Complain[] = [];
  complains1: Complain[] = [];
  complains2: Complain[] = [];
  complains3: Complain[] = [];
  userId=Number(localStorage.getItem('USERID'));
  notaccept: boolean;
  constructor(private readonly _complainApiService: ComplainApiService,
              private readonly _confirmationService : ConfirmationService,
              private readonly _router: Router,
  ) {
  }
  accept(id: number, event: any) {
    this._confirmationService.confirm({
      target: event.target,
      message: '确定受理该投诉？',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //confirm action
        this._complainApiService.accept(id,this.userId).subscribe({
          next: () => {
            // reload user list
            this.ngOnInit();
          }
        })
      },
      reject: () => {
      }
    })
  }
  done(id: number, event: any) {
    this._confirmationService.confirm({
      target: event.target,
      message: '确定已处理完成该投诉？',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //confirm action
        this._complainApiService.done(id).subscribe({
          next: () => {
            // reload user list
            this.ngOnInit();
          }
        })
      },
      reject: () => {
      }
    })
  }


  ngOnInit(): void {
    this._complainApiService.count(0,this.userId).subscribe(count => {
      this.msgs1 = [{summary: count.count + `个未受理投诉`, severity: "info"}];
    })
    this._complainApiService.count(1,this.userId).subscribe(count => {
      this.msgs2 = [{summary: count.count + `个未完成投诉`, severity: "info"}];
    })
    this._complainApiService.count(2,this.userId).subscribe(count => {
      this.msgs3 = [{summary: count.count + `个待确认投诉`, severity: "info"}];
    })
    this._complainApiService.count(3,this.userId).subscribe(count => {
      this.msgs4 = [{summary: count.count + ` 个已完成投诉`, severity: "info"}];
    })
    this._complainApiService.getComplain(0,this.userId).subscribe((complains0) => {
      this.complains0 = complains0;
    })
    this._complainApiService.getComplain(1,this.userId).subscribe((complains1) => {
      this.complains1 = complains1;
    })
    this._complainApiService.getComplain(2,this.userId).subscribe((complains2) => {
      this.complains2 = complains2;
    })
    this._complainApiService.getComplain(3,this.userId).subscribe((complains2) => {
      this.complains3 = complains2;
    })
  }

}
