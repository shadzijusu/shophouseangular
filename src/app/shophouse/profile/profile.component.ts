import { AccountService } from 'src/app/core/services/AccountService.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = ""
  password: string = ""
  authToken$ : any 
  constructor(private accountService : AccountService) { }

  ngOnInit(): void {
  }
  logIn() {
    this.authToken$ = this.accountService.getAuthToken(this.username, this.password);
    console.log(this.authToken$);
  }

}
