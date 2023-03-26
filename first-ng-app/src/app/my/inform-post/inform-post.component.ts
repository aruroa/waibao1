import { Component, OnInit } from '@angular/core';
import {Message} from "primeng/api";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {InformApiService} from "../../core/api/inform-api.service";

@Component({
  selector: 'app-inform-post',
  templateUrl: './inform-post.component.html',
  styleUrls: ['./inform-post.component.css']
})
export class InformPostComponent implements OnInit {
  msgs: Message[] = [];
  loginUser: any;
  inform: FormGroup;
  constructor(private readonly formBuilder: FormBuilder,
              private readonly _router: Router,
              private readonly httpClient: HttpClient,
              private readonly _informApiService: InformApiService,
  ) {
    this.inform = this.formBuilder.group(
      {
        title: [''],
        content: [''],
        fromTime: [''],
        toTime: [''],
      },

    );
  }
  ngOnInit():void {
    this.loginUser = localStorage.getItem("USER");
  }
  get f() {
    return this.inform.controls;
  }
  addInform() {
    console.log(this.inform.value)
    this._informApiService.addInform(this.inform.value).subscribe();
    alert("已编辑")
    this._router.navigate(['/homepage'])
  }
}
