import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io('http://localhost:3000');

  public sendMessage(message: any, user_name: any) {
    let data = { message: message, user_name: user_name };
    this.socket.emit('message', data)
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) => {
      console.log(this.message$.next(message));
    });

    return this.message$.asObservable();
  };
}
