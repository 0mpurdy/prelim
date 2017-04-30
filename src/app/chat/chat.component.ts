import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

import { UserService } from '../user/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  roomId;
  message;
  websocket: WebSocket;
  messages = [];

  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
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

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  sendMessage() {
    console.log(this.websocket);
    const newMessage = JSON.stringify({
      handle: this.userService.getCurrentUser().forename,
      // timestamp: this.datePipe.transform(Date.now(), 'MMM dd h:mm a'),
      message: this.message
    });
    console.log(newMessage);
    this.websocket.send(newMessage);
    this.message = '';
  }

  send() {
    this.messages.push({
      user: this.userService.getCurrentUser(),
      time: Date.now(),
      text: this.message
    });
    this.message = '';
    // document.getElementById('messageBoard').scrollTop = document.getElementById('messageBoard').scrollHeight;
    // console.log(document.getElementById('messageBoard'));
  }

}
