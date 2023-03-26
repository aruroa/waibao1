import {Component, Input, OnInit} from '@angular/core';
import {Message} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FixApiService} from "../../../core/api/fix-api.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accept-form',
  templateUrl: './accept-form.component.html',
  styleUrls: ['./accept-form.component.css']
})
export class AcceptFormComponent implements OnInit {


  @Input() id: any;
  msgs: Message[] = [];
  loginUser: any;
  constructor(private readonly formBuilder: FormBuilder,
              private readonly _router: Router,
              private readonly httpClient: HttpClient,
              private readonly _fixApiService: FixApiService,
  ) {
    this.fix = this.formBuilder.group(
      {
        id: [''],
        userId:[''],
        acceptId: [''],
        orderTime: [''],
        room: [''],
        content:[''],
        state:[''],
        report:[''],

      },
      {disable: this.formDisabled}
    );
  }
  get f() {
    return this.fix.controls;
  }
  ngOnInit():void {
    this.loginUser = localStorage.getItem("USER");
  }
  formDisabled: boolean = true;
  userId=Number(localStorage.getItem('USERID'));
  fix: FormGroup;
  submitted = false;

  addFixAccept() {
    this.fix.value.id=this.id;
    this.fix.value.acceptId=Number(localStorage.getItem('USERID'));
    this._fixApiService.accept(this.fix.value).subscribe();
    this.displayModal = false;
    alert("已受理")
    this._router.navigate(['/homepage']);
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
