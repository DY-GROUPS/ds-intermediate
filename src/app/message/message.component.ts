import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ChatService } from '../chat.service';
import Viewer from 'viewerjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  text;
  text2;
  username = 'admin';
  messages: IMessage[] = [];

  @ViewChild('one', { static: false }) div1: ElementRef;

 

  constructor(

    private chatservice:ChatService,
    private renderer:Renderer2,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef

  ) { 

  }

  ngOnInit(): void {

    this.chatservice.socket.on('chat message', (data) => {

      var msg = data.msg;
      var datetime = data.datetime;

      var index = this.messages.findIndex(el => el.username === this.username);

      if(index === -1){

        this.messages.push(

          {
            username: this.username,
            msgs: [{type:'in',msg, datetime}],
            isRead: false,
            msgCount: 1,
            userImage: './assets/notification-image4.png'
          }

        )

      }

      else{

       this.messages[index].msgs.push({type:'in',msg, datetime});
       this.messages[index].isRead = false;
       this.messages[index].msgCount++;

      }

      this.div1.nativeElement.innerHTML = null;
  
      var msgArray = this.messages[0].msgs
      
      for(var index = 0; index < msgArray.length; index++){
  
        if( msgArray[index].type === "in"){
  
          const mgsContainer: HTMLElement = this.renderer.createElement('div');
          mgsContainer.className = "msg-container";
          mgsContainer.style.justifyContent = "flex-start";
          const div2: HTMLElement = this.renderer.createElement('div');
          div2.className = "in-msg";
          div2.style.flexDirection = "column";
          this.text2 = msgArray[index].msg;
          div2.innerText = this.text2
          mgsContainer.appendChild(div2);
          this.div1.nativeElement.appendChild(mgsContainer);
  
        }
  
        else{
  
          const mgsContainer: HTMLElement = this.renderer.createElement('div');
          mgsContainer.className = "msg-container";
          mgsContainer.style.justifyContent = "flex-end";
          const div2: HTMLElement = this.renderer.createElement('div');
          div2.className = "out-msg";
          div2.style.flexDirection = "column";
          this.text2 = msgArray[index].msg;
          div2.innerText = this.text2
          mgsContainer.appendChild(div2);
          this.div1.nativeElement.appendChild(mgsContainer);
  
        }
        
      }


    });

  } 

  sendMessage(){

    const mgsContainer: HTMLElement = this.renderer.createElement('div');
    mgsContainer.className = "msg-container";
    mgsContainer.style.justifyContent = "flex-end";
    const div2: HTMLElement = this.renderer.createElement('div');
    div2.className = "out-msg";

    
    if(this.text){

      let msg = this.text;

      let index = this.messages.findIndex(el => el.username === this.username);

      let d = new Date();
      let datetime = d.toLocaleString();

      if(index === -1){
  
        this.messages.push(
  
          {
            username: this.username,
            msgs: [{type:'out', msg, datetime}],
            isRead: true,
            msgCount: 0,
            userImage: './assets/notification-image4.png'
          }
  
        )
  
      }
  
      else{
  
       this.messages[index].msgs.push({type:'out',msg,datetime});
       this.messages[index].isRead = true;
       this.messages[index].msgCount = 0

      }

      this.chatservice.socket.emit('chat message', {username: this.username, msg});
    
     
      div2.innerText = msg;
      mgsContainer.appendChild(div2);
      this.div1.nativeElement.appendChild(mgsContainer);
      this.text = '';

    }
  }

}

interface IMessage {
  username: string,
  msgs: any[],
  isRead: boolean,
  msgCount: number,
  userImage: string
}


