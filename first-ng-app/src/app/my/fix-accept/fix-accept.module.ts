import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FixAcceptRoutingModule} from "./fix-accept-routing.module";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {HttpClientModule} from "@angular/common/http";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from "primeng/table";
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { FormsModule } from '@angular/forms';
import {RippleModule} from "primeng/ripple";
import { AcceptFormComponent } from './accept-form/accept-form.component';
import { ReportFormComponent } from './report-form/report-form.component';
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    AcceptFormComponent,
    ReportFormComponent
  ],
  exports: [
    AcceptFormComponent,
    ReportFormComponent
  ],
  imports: [
    CommonModule,
    FixAcceptRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    HttpClientModule,
    InputTextModule,
    CardModule,
    InputMaskModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    TableModule,
    ConfirmPopupModule,
    FormsModule,
    RippleModule,
    DialogModule
  ]
})
export class FixAcceptModule {
}
