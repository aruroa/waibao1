import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ChatPanelComponent} from "./chat-panel.component";
import {ChatListComponent} from "./chat-list/chat-list.component";
import {DialogueComponent} from "./dialogue/dialogue.component";
const homepageModule = () =>
  import('./chat-panel.module').then(module => module.ChatPanelModule);

const routes: Routes = [
  {
    path: '',
    component: ChatPanelComponent
  },{
    path: 'chat-list',
    component: ChatListComponent
  },{
    path: 'dialogue',
    component: DialogueComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatPanelRoutingModule {
}
