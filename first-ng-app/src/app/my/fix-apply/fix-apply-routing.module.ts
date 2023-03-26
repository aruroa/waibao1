import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FixApplyComponent} from "./fix-apply.component";
import {ReportComponent} from "./report/report.component";
import {DoneComponent} from "./done/done.component";
import {ApplyComponent} from "./apply/apply.component";
import {AcceptComponent} from "./accept/accept.component";

const routes: Routes = [
  {
    path: '',
    component: FixApplyComponent,
    children:[
      {
        path: '',
        redirectTo:'apply',
        pathMatch:'full'
      },
      {
        path: 'accept',
        component: AcceptComponent
      },{
        path: 'apply',
        component: ApplyComponent
      },{
        path: 'done',
        component: DoneComponent
      },{
        path: 'report',
        component: ReportComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixApplyRoutingModule {
}
