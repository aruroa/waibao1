import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FixAcceptComponent} from "./fix-accept.component";
import {AcceptFormComponent} from "./accept-form/accept-form.component";
import {ReportFormComponent} from "./report-form/report-form.component";

const routes: Routes = [
  {
    path: '',
    component: FixAcceptComponent
  }, {
    path: 'accept-form',
    component: AcceptFormComponent,

  }, {
    path: 'report-form',
    component:  ReportFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixAcceptRoutingModule {
}
