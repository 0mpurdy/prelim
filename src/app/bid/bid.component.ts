import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

websocket;
messages;

  constructor() { }

  ngOnInit() {
    this.messages = [];
    this.websocket = new WebSocket('wss://ckane-channels-demo.herokuapp.com/chat/something/');
    this.websocket.onmessage = (message) => {
      console.log(message);
      this.messages.push(message);
    };
  }

  sendMessage() {
    console.log(this.websocket);
    this.websocket.send('anything');
  }

}
