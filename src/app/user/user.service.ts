import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  users = {};
  currentUser: any;

  addUser(user): boolean {
    if (!this.users[user.email]) {
      this.users[user.email] = user;
      return true;
    }
    return false;
  }

  login(user) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser;
  }

}
