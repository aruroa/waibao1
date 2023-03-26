import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ActivityDetailComponent} from "./activity-detail/activity-detail.component";
import {ActivitiesListComponent} from "./activities-list.component";

const routes: Routes = [
  {
    path: '',
    component: ActivitiesListComponent
  },
  {
    path: 'detail/:id',
    component: ActivityDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesListRoutingModule {
}
