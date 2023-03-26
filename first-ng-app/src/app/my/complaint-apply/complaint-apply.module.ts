import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComplaintApplyRoutingModule} from "./complaint-apply-routing.module";
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
import {LodgeComponent} from "./lodge/lodge.component";
import {ReceiveComponent} from "./receive/receive.component";
import {HandleComponent} from "./handle/handle.component";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    LodgeComponent,
    ReceiveComponent,
    HandleComponent,
  ],
  exports: [
    LodgeComponent,
    ReceiveComponent,
    HandleComponent,
  ],
    imports: [
        CommonModule,
        ComplaintApplyRoutingModule,
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
export class ComplaintApplyModule {
}
