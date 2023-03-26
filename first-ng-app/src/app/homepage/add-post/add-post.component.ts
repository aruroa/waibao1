import { Component, OnInit } from '@angular/core';
import {Message} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PostApiService} from "../../core/api/post-api.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  msgs: Message[] = [];
  loginUser: any;
  constructor(private readonly formBuilder: FormBuilder,
              private readonly _router: Router,
              private readonly httpClient: HttpClient,
              private readonly _postApiService: PostApiService,
  ) {
    this.post = this.formBuilder.group(
      {
        userId: [''],
        title: [''],
        content: [''],
        type: [''],
        createTime: [''],
        commentCount: ['']
      },
      {disable: this.formDisabled}
    );
  }
  get f() {
    return this.post.controls;
  }
  ngOnInit():void {
    this.loginUser = localStorage.getItem("USER");
  }
  formDisabled: boolean = true;
  userId: string = window.location.href.split('user/')[1];
  post: FormGroup;
  submitted = false;

  addPost() {
    this.post.value.userId=localStorage.getItem('USERID');
    this._postApiService.addPost(this.post.value).subscribe();
    this.displayModal = false;
    alert("已编辑")
    this._router.navigate(['/homepage'])
  }
  displayModal: boolean;

  displayBasic: boolean;

  displayBasic2: boolean;

  displayMaximizable: boolean;

  displayPosition: boolean;

  position: string;

  showModalDialog() {
    this.displayModal = true;
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }

}
