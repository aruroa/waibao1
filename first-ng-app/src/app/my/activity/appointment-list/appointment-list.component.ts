import { Component, OnInit } from '@angular/core';
import {Message} from "primeng/api";
import {AppointmentApiService} from "../../../core/api/appointment-api.service";
import {Router} from "@angular/router";
import {Appointment} from "../../../shared/model/appointment";

@Component({
  selector: 'app-activity-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  term:number=1;
  msgs: Message[] = [{summary: "个用户", severity: "info"}]
  appointments: Appointment[] = [];

  constructor(private readonly _appointmentApiService: AppointmentApiService,
              private readonly _router: Router,
  ) {
  }

  ngOnInit(): void {
    this._appointmentApiService.count().subscribe(({count}) => {
      this.msgs = [{summary: `${count} 个申请`, severity: "info"}];
    })
    this._appointmentApiService.getAllAppointment().subscribe((appointments) => {
      this.appointments =appointments;
    })
  }

}
