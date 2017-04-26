import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  roomId;
  message;
  messages = [
    {
      user: { forename: 'Chris', surname: 'Kane' },
      time: new Date(2017, 3, 26, 9, 15),
      text: 'Message 1'
    },
    {
      user: { forename: 'Chris', surname: 'Kane' },
      time: new Date(2017, 3, 26, 9, 16),
      text: 'Message 2'
    },
    {
      user: { forename: 'Chris', surname: 'Kane' },
      time: new Date(2017, 3, 26, 9, 20),
      text: 'Message 3'
    },
    {
      user: { forename: 'Chris', surname: 'Kane' },
      time: new Date(2017, 3, 26, 9, 23),
      text: 'Message 4'
    },
    {
      user: { forename: 'Chris', surname: 'Kane' },
      time: new Date(2017, 3, 26, 10, 30),
      text: 'Message 5'
    }
  ] as any[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.roomId = params['id'];
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
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
