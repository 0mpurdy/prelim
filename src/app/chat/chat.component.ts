import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  roomId;
  message;
  messages = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.roomId = params['id'];
    });
  }

  send() {
    this.messages.push({
      user: this.userService.getCurrentUser(),
      time: Date.now(),
      text: this.message
    });
    this.message = '';
  }

}
