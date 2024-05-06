import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isLoggedIn: boolean = false;

  name(): string | null {
    return this.isLoggedIn ? 'John Doe' : null;
  }
}
