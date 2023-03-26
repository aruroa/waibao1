import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
const postDetailModule = () =>
import('./post-detail/post-detail.module').then(module => module.PostDetailModule);

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    loadChildren:postDetailModule
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
