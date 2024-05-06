import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private user: UserService, private router: Router) {}

  logIn(): void {
    this.user.isLoggedIn = true;
    this.router.navigateByUrl('/');
  }
}
