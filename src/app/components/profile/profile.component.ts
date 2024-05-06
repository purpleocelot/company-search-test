import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor(public user: UserService, private router: Router) {}

  logIn(): void {
    this.router.navigateByUrl('/login');
  }

  logOut(): void {
    this.user.isLoggedIn = false;
    this.router.navigateByUrl('/login');
  }
}
