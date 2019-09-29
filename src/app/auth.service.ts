import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = new Subject();
  public $isLoggedIn = this.isLoggedIn.asObservable();

  constructor() { }

  setUser(value) {
    return sessionStorage.setItem('users', JSON.stringify(value));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem('users'));
  }

  removeUser() {
    return sessionStorage.clear();
  }
  isLogIn() {
    return this.isLoggedIn.next(true);
  }
  isLogOut() {
    return this.isLoggedIn.next(false);
  }
}
