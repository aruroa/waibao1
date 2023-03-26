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
import {ChatPanelRoutingModule} from "./chat-panel-routing.module";
import {DividerModule} from "primeng/divider";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {CarouselModule} from "primeng/carousel";
import {MenuModule} from "primeng/menu";
import {PanelModule} from "primeng/panel";
import {GalleriaModule} from "primeng/galleria";
import {DialogModule} from "primeng/dialog";
import { ChatListComponent } from './chat-list/chat-list.component';
import { DialogueComponent } from './dialogue/dialogue.component';

@NgModule({
    declarations: [
    ChatListComponent,
    DialogueComponent
  ],
  exports: [
    ChatListComponent,
    DialogueComponent
  ],
  imports: [
    CommonModule,
    ChatPanelRoutingModule,
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
    CarouselModule,
    MenuModule,
    PanelModule,
    GalleriaModule,
    DialogModule
  ]
})
export class ChatPanelModule {
}
