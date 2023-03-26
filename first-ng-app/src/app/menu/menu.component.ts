import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {UserIdService} from "../serves/user-id.service"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userId: number =0;
  menuItems: MenuItem[] = [
    {
      label:'主页',
      icon:'pi pi-fw pi-home',
      routerLink: 'homepage',
    },
    {
      label:'消息',
      icon:'pi pi-fw pi-whatsapp',
      routerLink: 'chat-panel',
    }, {
      label:'我的',
      icon:'pi pi-fw pi-box',
      items:[
        {
          label:'值班',
          icon:'pi pi-fw pi-calendar',
          routerLink: 'schedule'

        },
        {
          label:'投诉',
          icon:'pi pi-fw pi-thumbs-down',
          routerLink: 'complaint-apply'

        },{
          label:'报修',
          icon:'pi pi-fw pi-question-circle',
          routerLink: 'fix-apply'

        },{
          label:'满意度评价',
          icon:'pi pi-fw pi-heart',
          routerLink: 'satify-fill'
        },{
          label:'处理投诉',
          icon:'pi pi-fw pi-thumbs-up',
          routerLink: 'complaint-accept'
        },{
          label:'发布通知',
          icon:'pi pi-fw pi-bell',
          routerLink: 'inform-post'
        },{
          label:'满意度汇总',
          icon:'pi pi-fw pi-star',
          routerLink: 'satify-list'
        },{
          label:'维修',
          icon:'pi pi-fw pi-question-circle',
          routerLink: 'fix-accept'
        },{
          label:'地图打卡',
          icon:'pi pi-fw pi-map',
          routerLink: 'punch'
        },{
          label:'活动',
          icon:'pi pi-fw pi-file',
          items:[
            {
              label:'发布活动',
              icon:'pi pi-fw pi-pencil',
              routerLink: 'activity-post'

            },
            {
              label:'查看活动申请',
              icon:'pi pi-fw pi-copy',
              routerLink: 'activity-list'
            }]
        },{
          label:'用户',
          icon:'pi pi-fw pi-user',
          routerLink: ' ',
          items:[
            {
              label:'新建用户',
              icon:'pi pi-fw pi-user-plus',
              routerLink: 'admin/user/new'

            },
            {
              label:'查看用户列表',
              icon:'pi pi-fw pi-users',
              routerLink: 'admin/users'
            }
          ]
        },
      ]
    },
    {
      label:'注銷',
      icon:'pi pi-fw pi-power-off',
      command: () => {
        localStorage.removeItem('USER');
        alert("Logout Sucessful");
        this._router.navigate(['/auth'])
      }
    }
  ];
  constructor(private readonly _router: Router,
  private userIdService:UserIdService) {
    console.log("menu"+this.userIdService.userId);
    this.userId=this.userIdService.userId;
  }

  ngOnInit(): void {
    console.log("menu"+this.userIdService.userId);
    this.userId=this.userIdService.userId;
  }

}
