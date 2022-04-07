import { Component } from '@angular/core';

import { ChatService } from './chat.service';
// import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'socket.io';
  newMessage!: string;
  messageList: string[] = [];
  user_name:any;
  constructor(private chatService: ChatService) {
    this.getName();
  }
  getName(){
    this.user_name = prompt('Please enter your name');
  }
  setName(){
    return this.user_name;
  }
  ngOnInit() {
    this.chatService.getNewMessage().subscribe((message) => {
      if (message == '' || message == null) {
        return;
      } else {
        this.messageList.push(message);
      }
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage, this.setName());
    this.newMessage = '';
  }
}
