import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DividerModule} from "primeng/divider";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {PostDetailModule} from "./post-detail/post-detail.module";

@NgModule({
  declarations: [
    PostDetailComponent,
  ],
  exports: [PostDetailComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
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
    DividerModule,
    ScrollPanelModule,
    PostDetailModule
  ]
})
export class DashboardModule {
}
