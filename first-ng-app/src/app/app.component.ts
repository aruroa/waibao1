import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {UserApiService} from "./core/api/user-api.service";
import {Router} from "@angular/router";
import {PostApiService} from "./core/api/post-api.service";
import {Post} from "./shared/model/post";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent implements OnInit{
  initialCount: number = 5;
  addItem(data:number){
//这里可以打印获取到的值
    console.log("app中");
    console.log(data)
  }
  changeMsg: string;


  countChange(event: Event) {
    this.changeMsg = `子组件change事件已触发，当前值是: ${event}`;
  }
  displayModal: boolean;

  formDisabled: boolean = true;

  title: string = '';

  content: string = '';

  post: FormGroup;

  loginUser: any;
  constructor(private readonly formBuilder: FormBuilder,
              private readonly _userApiService: UserApiService,
              private readonly _postApiService: PostApiService,
              private readonly _router: Router) {

    // this.post = this.formBuilder.group(
    //   {
    //     userId: [''],
    //     title: [''],
    //     content: [''],
    //     type: [''],
    //     createTime: [''],
    //     commentCount: ['']
    //   },
    //   {disable: this.formDisabled}
    // );
  }

  // get f() {
  //   return this.post.controls;
  // }

  ngOnInit():void {
    this.loginUser = localStorage.getItem("USER");
  }

  // showModalDialog() {
  //   this.displayModal = true;
  // }

  // addPost() {
  //   this._postApiService.addPost(this.post.value).subscribe();
  //   this.displayModal = false;
  //   this._router.navigate(['/homepage'])
  // }

}
