import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message, MessageService} from "primeng/api";
import {HttpClient} from "@angular/common/http";
import {Route, Router} from "@angular/router";
import {Inform} from "../../shared/model/inform";
import {InformPostComponent} from "../../my/inform-post/inform-post.component";
import {ActivityApiService} from "../../core/api/activity-api.service";
import {InformApiService} from "../../core/api/inform-api.service";

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {
  loginUser: any;
  informList: Inform[] = [];

  msgs: Message[] = [];

  constructor(private readonly formBuilder: FormBuilder,
              private readonly _router: Router,
              private readonly httpClient: HttpClient,
              private _informService: InformApiService,
              private messageService: MessageService,) {

  }

  displayModal: boolean;

  displayBasic: boolean;

  displayBasic2: boolean;

  displayMaximizable: boolean;

  displayPosition: boolean;

  position: string;

  ngOnInit() {
    this.initData();
    this.showModalDialog()
  }
  initData() {
    this._informService.getAllInform().subscribe(res => {
      this.informList = res;
    })
  }

  update() {
    this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
    this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }

  viewDetail(activityId: number) {
    this._router.navigate(['/activity/detail', activityId])
  }

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

