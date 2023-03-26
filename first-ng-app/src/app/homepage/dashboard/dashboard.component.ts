import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {PostApiService} from "../../core/api/post-api.service";
import {Post} from "../../shared/model/post";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: ' app-dashboard',
  templateUrl:'./dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginUser: any;

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

  postList: Post[] = [];

  constructor(private messageService: MessageService,
              private readonly _router: Router,
              private _postService: PostApiService) { }

  ngOnInit(): void {
    this.loginUser = localStorage.getItem("USER");
    this.initData();
  }

  initData() {
    this._postService.getAllPost().subscribe(res => {

      this.postList = res;
    })
  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }

  viewDetail(postId: number) {
    this._router.navigate(['homepage/dashboard/detail', postId])
  }
}
