import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/user.model';
import { UserSectionService } from '../../../service/user-section.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: UserModel[];

  constructor( private _userService: UserSectionService) { }

  ngOnInit(): void {
    this.getUsersFromDB();
  }

  getUsersFromDB() {
    this._userService.getUsers()
    .subscribe( resp => {
      this.users = resp['data'];
    })
  }

}
