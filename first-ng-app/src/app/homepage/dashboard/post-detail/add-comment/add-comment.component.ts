import {Component, Input, OnInit} from '@angular/core';
import {Message} from "primeng/api";
import {Activity} from "../../../../shared/model/activity";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CommentApiService} from "../../../../core/api/comment-api.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {
  // postid
  @Input() msg: any;
  loginUser: any;
  commentForm: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
              private readonly _router: Router,
              private _commentService: CommentApiService,
              private readonly httpClient: HttpClient,) {
    this.commentForm = this.formBuilder.group(
    {
      userId: [''],
      postId: [''],
      content: [''],
      commentTime: [''],
    },
  );}
  get f() {
    return this.commentForm.controls;
  }
  ngOnInit(): void {
  }
  addComment() {
    this.commentForm.value.postId=this.msg;
    this.commentForm.value.userId=localStorage.getItem('USERID');
    console.log(this.commentForm.value)
    this._commentService.addComment(this.commentForm.value).subscribe();
    alert("申请成功，感谢支持")
    this._router.navigate(['/homepage'])
  }
}
