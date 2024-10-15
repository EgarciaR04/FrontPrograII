import { Component, inject, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Response';
import { UserService } from 'src/app/service/api/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  public user: User;
  private userService = inject(UserService)

  ngOnInit(): void {
    const asig = localStorage.getItem("asig")

    this.userService.get(asig)
    .subscribe({
      next: (data) => {
        if(data.hability){
          this.user = data;
        }
      }
    })
  }

  constructor() {
    this.user = {
      id: 0,
      username: "",
      firstname: "",
      lastname: "",
      country: "",
      tel: "",
      role: "",
      hability: true,
      changePassword: true,
      changePasswordNextSession: true
    }
  }

}