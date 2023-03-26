import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth/auth.component";
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
import {AppointmentListComponent} from "./my/activity/appointment-list/appointment-list.component";
import {ScheduleListComponent} from "./my/schedule-list/schedule-list.component";

const adminModule = () =>
  import('./my/admin/admin.module').then(module => module.AdminModule);

const homepageModule = () =>
  import('./homepage/homepage.module').then(module => module.HomepageModule);

const fixApplyModule = () =>
  import('./my/fix-apply/fix-apply.module').then(module => module.FixApplyModule);

const ComplaintApplyModule = () =>
  import('./my/complaint-apply/complaint-apply.module').then(module => module.ComplaintApplyModule);

const fixAcceptModule = () =>
  import('./my/fix-accept/fix-accept.module').then(module => module.FixAcceptModule);

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: adminModule
  }, {
    path: '',
    component: AuthComponent
  }, {
    path: 'homepage',
    loadChildren: homepageModule
  },{
    path:'activity-post',
    component:ActivityPostComponent
  },{
    path:'activity-list',
    component:AppointmentListComponent
  },{
    path:'complaint-accept',
    component:ComplaintAcceptComponent
  },{
    path:'complaint-apply',
    loadChildren:ComplaintApplyModule
  },{
    path:'fix-accept',
    loadChildren: fixAcceptModule
  },{
    path:'fix-apply',
    loadChildren:fixApplyModule
  },{
    path:'inform-post',
    component:InformPostComponent
  },{
    path:'punch',
    component:PunchComponent
  },{
    path:'satify-fill',
    component:SatifyFillComponent
  },{
    path:'satify-list',
    component:SatifyListComponent
  },{
    path:'schedule',
    component:ScheduleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
