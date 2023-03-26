import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PostApiService} from "../../../core/api/post-api.service";
import {Post} from "../../../shared/model/post";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  postId: string = window.location.href.split('/dashboard/detail/')[1];
  post: Post;
  public msg: string =this.postId;


  constructor( private readonly _router: Router,
               private _postService: PostApiService) { }

  ngOnInit(): void {
    this.post = new Post();
    this._postService.getPost(this.postId).subscribe(
      res => {
        this.post = res;
      }
    )
  }

}
