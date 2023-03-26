import { Component, OnInit } from '@angular/core';
import {Message, MessageService} from "primeng/api";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ActivityApiService} from "../../../core/api/activity-api.service";

@Component({
  selector: 'app-activity-post',
  templateUrl: './activity-post.component.html',
  styleUrls: ['./activity-post.component.css']
})
export class ActivityPostComponent implements OnInit {
  uploadedFiles: any[] = [];
  msgs: Message[] = [];
  loginUser: any;
  activity: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
              private readonly _router: Router,
              private readonly httpClient: HttpClient,
              private readonly _activityApiService: ActivityApiService,
              private messageService: MessageService
  ) {
    this.activity = this.formBuilder.group(
      {
        title: [''],
        content: [''],
        photo: [''],
        fromTime: [''],
        toTime: [''],
      },

    );
  }
  ngOnInit():void {
    this.loginUser = localStorage.getItem("USER");
  }
  get f() {
    return this.activity.controls;
  }
  addActivity() {
    this.activity.value.photo="activity1.jpg"
    this._activityApiService.addActivity(this.activity.value).subscribe();
    alert("已编辑")
    this._router.navigate(['/homepage'])
  }
  onUpload(event:any) {
    console.log("onUpload");

    for(let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(file);
      console.log(this.uploadedFiles);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
