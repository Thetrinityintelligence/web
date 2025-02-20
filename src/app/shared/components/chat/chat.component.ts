import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent  {
  messages: string[] = [];
  message: string = '';
  room: string = 'default-room'; // Default shared room

  constructor(private socketService: ChatService) {
    // Join the default room on initialization
    this.socketService.joinRoom(this.room);

    // Listen for incoming messages
    this.socketService.receiveMessages().subscribe((msg: string) => {debugger
      this.messages.push(msg);
    });
  }

  // Send a message to the room
  sendMessage(): void {
    if (this.message.trim()) {
      this.socketService.sendMessage(this.room, this.message);
      this.message = ''; // Clear the input
    }
  }

  // Change the room
  changeRoom(newRoom: string): void {
    this.room = newRoom;
    this.messages = []; // Clear messages for the new room
    this.socketService.joinRoom(newRoom);
  }
}
