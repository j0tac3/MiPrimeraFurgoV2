import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserSectionService } from 'src/app/service/user-section.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public users: UserModel[];

  constructor( private _userService: UserSectionService) { }

  ngOnInit(): void {
    this.getUsersFromDB();
  }

  getUsersFromDB() {
    this._userService.getUsers()
    .subscribe( resp => {
      this.users = resp['data'];
      console.log(resp);
    })
  }

}
