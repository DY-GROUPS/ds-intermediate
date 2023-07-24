import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import io from 'socket.io-client';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  username;
  adminChatID;
  connectedUsers = [];
  currentUser;

  constructor(
    public profileservice: ProfileService
  ) {

    this.currentUser = profileservice.getUser();
    this.username = this.currentUser.displayName;
  }

  // https://chat-system-4hbl.onrender.com/
  socket = io('http://localhost:8081', {
    withCredentials: true,
    allowEIO3: false,
    extraHeaders: {
      "my-custom-header": "abcd"
    }
  });

  public join(){
  
    this.socket.emit('joining msg', this.username, this.callBack);

  }

  public getConnectedUsers(){
    return this.connectedUsers;
  }

  private callBack(id){
    this.adminChatID = id;
    //console.log(this.adminChatID)
  }
  
}
