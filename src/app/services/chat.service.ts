import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ChatService {
    private socket: Socket;

    constructor() {
        this.socket = io(environment.api, {
            transports: ['websocket', 'polling'], // Allow fallback
        });
        this.socket.on('connect', () => {
          console.log('Connected to the server:', this.socket.id);
      });
  
      this.socket.on('connect_error', (error: any) => {
          console.error('Connection error:', error);
      });
    }

    // // Send a message to the server
    // sendMessage(message: string): void {
    //     this.socket.emit('message', message);
    // }

    // // Receive messages from the server
    // getMessages(): Observable<string> {
    //     return new Observable((observer) => {
    //         this.socket.on('message', (message: string) => {
    //             observer.next(message);
    //         });

    //         // Clean up when the observable is unsubscribed
    //         return () => this.socket.off('message');
    //     });
    // }

    // // Disconnect the socket when the service is destroyed
    // disconnect(): void {
    //     this.socket.disconnect();
    // }
    // Join a specific chat room
  joinRoom(room: string): void {
    this.socket.emit('joinRoom', room);
  }

  // Send a message to a specific room
  sendMessage(room: string, message: string): void {
    this.socket.emit('sendMessage', { room, message });
  }

  // Listen for messages in the current room
  receiveMessages(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('receiveMessage', (message: string) => {
        observer.next(message);
      });
    });
  }
}
