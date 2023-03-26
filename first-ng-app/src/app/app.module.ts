import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {AppRoutingModule} from "./app-routing.module";
import {AuthComponent} from "./auth/auth.component";
import {CardModule} from "primeng/card";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PanelModule} from "primeng/panel";
import {MenuModule} from "primeng/menu";
import {ConfirmationService, MessageService} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {InputTextareaModule} from "primeng/inputtextarea";
import {HomepageComponent} from "./homepage/homepage.component";
import {HomepageModule} from "./homepage/homepage.module";
import {FieldsetModule} from "primeng/fieldset";
import { ChatPanelComponent } from './chat-panel/chat-panel.component';
import {AdminComponent} from "./my/admin/admin.component";
import {ActivityPostComponent} from "./my/activity/activity-post/activity-post.component";
import {ComplaintAcceptComponent} from "./my/complaint-accept/complaint-accept.component";
import {ComplaintApplyComponent} from "./my/complaint-apply/complaint-apply.component";
import {FixAcceptComponent} from "./my/fix-accept/fix-accept.component";
import {FixApplyComponent} from "./my/fix-apply/fix-apply.component";
import {InformPostComponent} from "./my/inform-post/inform-post.component";
import {PunchComponent} from "./my/punch/punch.component";
import {SatifyFillComponent} from "./my/satify-fill/satify-fill.component";
import {SatifyListComponent} from "./my/satify-list/satify-list.component";
import {ScheduleComponent} from "./my/schedule-list/schedule/schedule.component";
import { AppointmentListComponent } from './my/activity/appointment-list/appointment-list.component';
import { MenuComponent } from './menu/menu.component';
import {RatingModule} from "primeng/rating";
import {CalendarModule} from "primeng/calendar";
import {UserIdService} from "./serves/user-id.service";
import {StepsModule} from "primeng/steps";
import {ToastModule} from "primeng/toast";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {TableModule} from "primeng/table";
import {FileUploadModule} from "primeng/fileupload";
import {FixAcceptModule} from "./my/fix-accept/fix-accept.module";
import {GMapModule} from "primeng/gmap";
import { InsideComponent } from './inside/inside.component';
import {ScheduleModule} from "./my/schedule-list/schedule/schedule.module";
import { ScheduleListComponent } from './my/schedule-list/schedule-list.component';

@NgModule({
  declarations: [AdminComponent,
    ActivityPostComponent,
    ComplaintAcceptComponent,
    ComplaintApplyComponent,
    FixAcceptComponent,
    FixApplyComponent,
    InformPostComponent,
    PunchComponent,
    SatifyFillComponent,
    SatifyListComponent,
    AppComponent,
    AuthComponent,
    HomepageComponent,
    ChatPanelComponent,
    AppointmentListComponent,
    MenuComponent,
    InsideComponent,
    ScheduleListComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        MenubarModule,
        AppRoutingModule,
        CardModule,
        MessageModule,
        MessagesModule,
        ReactiveFormsModule,
        HttpClientModule,
        ButtonModule,
        InputTextModule,
        BrowserAnimationsModule,
        PanelModule,
        MenuModule,
        DialogModule,
        InputTextareaModule,
        FormsModule,
        HomepageModule,
        FieldsetModule,
        RatingModule,
        CalendarModule,
        StepsModule,
        ToastModule,
        ConfirmPopupModule,
        TableModule,
        FileUploadModule,
        FixAcceptModule,
        GMapModule,
      ScheduleModule
    ],
  providers: [MessageService,UserIdService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
