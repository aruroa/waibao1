import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Subscription} from "rxjs";
import {FixApiService} from "../../core/api/fix-api.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-fix-apply',
  templateUrl: './fix-apply.component.html',
  styleUrls: ['./fix-apply.component.css'],
  providers: [MessageService]
})
export class FixApplyComponent implements OnInit {
  items: MenuItem[];
  count: number;
  userId :number;
  state:number;
  subscription: Subscription;
  constructor(public messageService: MessageService, public _fixService: FixApiService,
              private router: Router) {}

  ngOnInit() {
    this.items = [{
      label: '报修',
      routerLink: 'apply'
    },
      {
        label: '受理',
        routerLink: 'accept'
      },
      {
        label: '完成',
        routerLink: 'done'
      },
      {
        label: '报告',
        routerLink: 'report'
      }
    ];
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
        if(this.state==1){
          this.router.navigate(['fix-apply/accept']);
        }else if(this.state==2){
          this.router.navigate(['fix-apply/done']);
        }else if(this.state==3){
          this.router.navigate(['fix-apply/done']);
        }else if(this.state==4){
          this.router.navigate(['fix-apply/report']);
        }
      }

    }, 100);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
