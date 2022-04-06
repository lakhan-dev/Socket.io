import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root',
})
export class ChatService {


  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io('http://localhost:3000');

  public sendMessage(message: any) {
    // console.log(this.socket)
    console.log(this.socket.emit('message', message))
    // console.log(message)
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) =>{
      // console.log(this.message$.next(message))
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };

}
