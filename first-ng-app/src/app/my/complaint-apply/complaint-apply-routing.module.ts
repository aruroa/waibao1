import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ComplaintApplyComponent} from "./complaint-apply.component";
import {HandleComponent} from "./handle/handle.component";
import {LodgeComponent} from "./lodge/lodge.component";
import {ReceiveComponent} from "./receive/receive.component";

const routes: Routes = [
  {
    path: '',
    component: ComplaintApplyComponent,
    children: [
      {
        path: '',
        redirectTo: 'lodge',
        pathMatch: 'full'
      },
      {
        path: 'lodge',
        component: LodgeComponent
      }, {
        path: 'receive',
        component: ReceiveComponent
      }, {
        path: 'handle',
        component: HandleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintApplyRoutingModule {
}
