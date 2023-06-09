import {Component, OnInit} from '@angular/core';
import {ConfirmationService, Message} from "primeng/api";
import {UserApiService} from "../../../core/api/user-api.service";
import {User} from "../../../shared/model/user";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ConfirmationService]
})
export class UserListComponent implements OnInit {

  msgs: Message[] = [{summary: "个用户", severity: "info"}]
  users: User[] = [];
  searchForm: FormGroup;

  constructor(private readonly _userApiService: UserApiService,
              private readonly _router: Router,
              private readonly _confirmationService: ConfirmationService,
              private readonly formBuilder: FormBuilder) {


    this.searchForm = this.formBuilder.group(
      {
        name: ['', Validators.required]
      }
    )


  }
  get s(){
    return this.searchForm.controls;
  }
  ngOnInit(): void {
    this._userApiService.count().subscribe(({count}) => {
      this.msgs = [{summary: `${count} 个用户`, severity: "info"}];
    })
    this._userApiService.getAll().subscribe((users) => {
      this.users = users;
    })
  }

  onSearch(name: string){
    console.log(this.s.name.value)
    this._router.navigate(['/admin/users/search',name])
  }

  viewUser(id: number) {
    this._router.navigate(['/admin/user', id])
  }

  deleteUser(id: number, event: any) {
    this._confirmationService.confirm({
      target: event.target,
      message: '你确定要删除用户吗？',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //confirm action
        this._userApiService.delete(id).subscribe({
          next: () => {
            // reload user list
            this.ngOnInit();
          },
          error: (message) => {
            alert(JSON.stringify(message));
          }
        })
      },
      reject: () => {
      }
    });
  }
}
