import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message, MessageService} from "primeng/api";
import {HttpClient} from "@angular/common/http";
import {Route, Router} from "@angular/router";
import {PostApiService} from "../../core/api/post-api.service";
import {ActivityDetailComponent} from "./activity-detail/activity-detail.component";
import {ActivityApiService} from "../../core/api/activity-api.service";
import {Activity} from "../../shared/model/activity";

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent {
  loginUser: any;
  activities: Activity[];

  responsiveOptions;

  constructor(private messageService: MessageService,
              private readonly _router: Router,
              private _activityService: ActivityApiService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.loginUser = localStorage.getItem("USER");
    this.initData();
  }


  initData() {
    this._activityService.getAllActivities().subscribe(res => {
      this.activities = res;
    })
  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }

  viewDetail(activityId: number) {
    this._router.navigate(['/activity/detail', activityId])
  }
}
