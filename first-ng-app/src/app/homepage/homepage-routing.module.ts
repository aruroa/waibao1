import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./homepage.component";
import {NoticeComponent} from "./notice/notice.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {AddPostComponent} from "./add-post/add-post.component";
const dashboardModule = () =>
  import('./dashboard/dashboard.module').then(module => module.DashboardModule);
const activitiesListModule = () =>
  import('./activities-list/activities-list.module').then(module => module.ActivitiesListModule);

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },{
    path:'notice',
    component:NoticeComponent
  },{
    path:'dashboard',
    loadChildren:dashboardModule
  },{
  path:'carousel',
    component:CarouselComponent
  },{
  path:'activity',
    loadChildren:activitiesListModule
  },{
    path:'add-post',
    component:AddPostComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule {
}
