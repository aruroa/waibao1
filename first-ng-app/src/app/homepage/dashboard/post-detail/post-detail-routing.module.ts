import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PostDetailComponent} from "./post-detail.component";
import {PostDetailModule} from "./post-detail.module";
import {CommentListComponent} from "./comment-list/comment-list.component";
import {AddCommentComponent} from "./add-comment/add-comment.component";

const routes: Routes = [
  {
    path: '',
    component: PostDetailComponent
  },{
    path: 'comment/:id',
    component: CommentListComponent
  },{
    path: 'addcomment',
    component: AddCommentComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostDetailRoutingModule {
}
