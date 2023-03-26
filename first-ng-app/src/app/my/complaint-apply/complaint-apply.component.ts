import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Subscription} from "rxjs";
import {ComplainApiService} from "../../core/api/complain-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-complaint-apply',
  templateUrl: './complaint-apply.component.html',
  styleUrls: ['./complaint-apply.component.css']
})
export class ComplaintApplyComponent implements OnInit {
  items: MenuItem[];
  count: number;
  userId :number;
  state:number;
  subscription: Subscription;
  constructor(public messageService: MessageService, public _complainService: ComplainApiService,
              private router: Router) {}

  ngOnInit() {
    this.items = [{
      label: '投诉',
      routerLink: 'lodge'
    },
      {
        label: '受理',
        routerLink: 'receive'
      },
      {
        label: '处理',
        routerLink: 'handle'
      }
    ];
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
        if(this.state==1){
          this.router.navigate(['complaint-apply/receive']);
        }else if(this.state==2){
          this.router.navigate(['complaint-apply/handle']);
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
