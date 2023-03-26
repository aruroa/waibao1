import {TabViewModule} from "primeng/tabview";
import {NgModule} from "@angular/core";
import {ScheduleComponent} from "./schedule.component";
import {FullCalendarModule} from "@fullcalendar/angular";
import {EventService} from "../../../core/api/event.service";

@NgModule({
  imports: [
    TabViewModule,
    FullCalendarModule,
    FullCalendarModule
  ],
  declarations: [
    ScheduleComponent
  ],
  exports: [
    ScheduleComponent
  ],
  providers: [EventService]
})
export class ScheduleModule{}
