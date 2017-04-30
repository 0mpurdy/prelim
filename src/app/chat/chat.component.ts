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
  websocket: WebSocket;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.roomId = params['id'];
    });
    this.messages = [];
    this.websocket = new WebSocket('wss://ckane-channels-demo.herokuapp.com/chat/' + this.roomId + '/');
    this.websocket.onmessage = (message) => {
      // console.log(message);
      const messageData = JSON.parse(message.data);
      console.log(messageData);
      this.messages.push({
      user: messageData.handle,
      time: new Date(messageData.timestamp),
      text: messageData.message
    });
    };
  }

  sendMessage() {
    console.log(this.websocket);
    this.websocket.send('anything');
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
