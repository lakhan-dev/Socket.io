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

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    console.log(this.newMessage);
    this.newMessage = '';
    
  }
}
