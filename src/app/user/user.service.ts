import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  users = {};
  currentUser: ChatUser;

  constructor() { }

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

export class ChatUser {
  forename: string;
  surname: string;
  email: string;
}
