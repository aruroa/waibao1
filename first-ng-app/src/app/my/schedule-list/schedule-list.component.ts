import {Component, OnInit, Output} from '@angular/core';
import {EventService} from "../../core/api/event.service";
import {v} from "@fullcalendar/core/internal-common";

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  @Output()schedules: { date: string; title: string; color: string }[] = [];
  display = false;

  constructor(private readonly _eventService: EventService) {}

  ngOnInit(): void {
    this.getSchedules();
  }

  private async getSchedules() {
    await this._eventService.getSchedules().subscribe(res => {
      res.forEach(schedule => {
        if (schedule.signClean1 === 1) {
          this.schedules.push({title: '清洁人员1' + schedule.clean1, date: schedule.date.toString(), color: 'green'})
        } else if (schedule.signClean1 === 0) {
          this.schedules.push({title: '清洁人员1' + schedule.clean1, date: schedule.date.toString(), color: 'blue'})
        }
        if (schedule.signClean2 === 1) {
          this.schedules.push({title: '清洁人员2' + schedule.clean2, date: schedule.date.toString(), color: 'green'})
        } else if (schedule.signClean2 === 0) {
          this.schedules.push({title: '清洁人员2' + schedule.clean2, date: schedule.date.toString(), color: 'blue'})
        }
        if (schedule.signClean3 === 1) {
          this.schedules.push({title: '清洁人员3' + schedule.clean3, date: schedule.date.toString(), color: 'green'})
        } else if (schedule.signClean3 === 0) {
          this.schedules.push({title: '清洁人员3' + schedule.clean3, date: schedule.date.toString(), color: 'blue'})
        }
        if (schedule.signMorning === 1) {
          this.schedules.push({title: '清晨服务人员' + schedule.serverMorning, date: schedule.date.toString(), color: 'green'})
        } else if (schedule.signMorning === 0) {
          this.schedules.push({title: '清晨服务人员' + schedule.serverMorning, date: schedule.date.toString(), color: 'blue'})
        }
        if (schedule.signNoon === 1) {
          this.schedules.push({title: '中午服务人员' + schedule.serverNoon, date: schedule.date.toString(), color: 'green'})
        } else if (schedule.signNoon === 0) {
          this.schedules.push({title: '中午服务人员' + schedule.serverNoon, date: schedule.date.toString(), color: 'blue'})
        }
        if (schedule.signAfternoon === 1) {
          this.schedules.push({title: '下午服务人员' + schedule.serverAfternoon, date: schedule.date.toString(), color: 'green'})
        } else if (schedule.signAfternoon === 0) {
          this.schedules.push({title: '下午服务人员' + schedule.serverAfternoon, date: schedule.date.toString(), color: 'blue'})
        }
        if (schedule.signFix === 1) {
          this.schedules.push({title: '维修人员' + schedule.fix, date: schedule.date.toString(), color: 'green'})
        } else if (schedule.signFix === 0) {
          this.schedules.push({title: '维修人员' + schedule.fix, date: schedule.date.toString(), color: 'blue'})
        }

      })
    })
    setTimeout(() => {
      this.display = true;

    }, 100);
  }

  public displaySchedule(): void {
    this.display = true;
  }
}
