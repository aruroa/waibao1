import { Component, OnInit } from '@angular/core';
import {ConfirmationService, Message} from "primeng/api";
import {Satify} from "../../shared/model/satify";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SatifyApiService} from "../../core/api/satify-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-satify-list',
  templateUrl: './satify-list.component.html',
  styleUrls: ['./satify-list.component.css'],
  providers: [ConfirmationService]
})
export class SatifyListComponent implements OnInit {
  term:number=1;
  msgs: Message[] = [{summary: "个用户", severity: "info"}]
  satifies: Satify[] = [];

  constructor(private readonly _satifyApiService: SatifyApiService,
              private readonly _router: Router,
            ) {
  }

  ngOnInit(): void {
    this._satifyApiService.count(this.term).subscribe(({count}) => {
      this.msgs = [{summary: `${count} 个用户`, severity: "info"}];
    })
    this._satifyApiService.getAllSatify(this.term).subscribe((satifies) => {
      this.satifies = satifies;
    })
  }



}
