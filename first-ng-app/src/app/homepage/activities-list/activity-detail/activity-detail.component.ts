import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Activity} from "../../../shared/model/activity";
import {ActivityApiService} from "../../../core/api/activity-api.service";
import {Message} from "primeng/api";
import {Appointment} from "../../../shared/model/appointment";
import {AppointmentApiService} from "../../../core/api/appointment-api.service";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  msgs: Message[] = [];
  activityId: string = window.location.href.split('/activity/detail/')[1];
  activity: Activity;
  loginUser: any;
  appointment: FormGroup;
  constructor( private readonly formBuilder: FormBuilder,
               private readonly _router: Router,
               private _activityService: ActivityApiService,
               private readonly httpClient: HttpClient,
                private _appointmentService:AppointmentApiService) {
    this.appointment = this.formBuilder.group(
      {
        userId: [''],
        activityId: [''],
        room: [''],
        phoneNum: ['']
      },
    );
  }
  get f() {
    return this.appointment.controls;
  }
  ngOnInit(): void {
    this.loginUser = localStorage.getItem("USER");
    this.activity = new Activity();
    this._activityService.getActivity(this.activityId).subscribe(
      res => {
        this.activity = res;
      }
    )
  }
  addAppointment() {
    this.appointment.value.activityId=this.activityId;
    this.appointment.value.userId=localStorage.getItem('USERID');
    this._appointmentService.addAppointment(this.appointment.value).subscribe();
    alert("申请成功，感谢支持")
    this._router.navigate(['/homepage'])
  }
}
