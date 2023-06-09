import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UpdataUserComponent} from "./updata-user/updata-user.component";
import {SearchUserComponent} from "./search-user/search-user.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'user/:id',
    component: EditUserComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'user/updata/:id',
    component: UpdataUserComponent
  },
  {
    path: 'users/search/:name',
    component: SearchUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
