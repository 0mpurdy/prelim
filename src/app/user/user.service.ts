import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  currentUser: ChatUser;

  constructor() { }

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
