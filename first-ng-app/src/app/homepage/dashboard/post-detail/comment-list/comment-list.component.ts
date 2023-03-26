import {Component, Input, OnInit} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Comment} from "../../../../shared/model/comment";
import {Router} from "@angular/router";
import {CommentApiService} from "../../../../core/api/comment-api.service";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})

export class CommentListComponent implements OnInit {
  loginUser: any;
  @Input() msg: any;
  items: MenuItem[] = [
    {
      label: 'Options',
      items: [{
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          this.update();
        }
      },
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {
            this.delete();
          }
        }
      ]},
    {
      label: 'Navigate',
      items: [{
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io'
      },
        {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
        }
      ]}
  ];
  commentList: Comment[] = [];
  constructor(private messageService: MessageService,
              private readonly _router: Router,
              private _commentService: CommentApiService) { }
  ngOnInit(): void {
    this.loginUser = localStorage.getItem("USER");
    this.initData();
  }

  initData() {
    this._commentService.getCommentByPostId(this.msg).subscribe(res => {
      console.log(res);
      this.commentList = res;
    })
  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }

}
