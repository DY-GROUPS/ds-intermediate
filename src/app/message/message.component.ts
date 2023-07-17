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
  sendFileDetails = [];
  uplodedFileContents =[];
  image: string | SafeUrl ;

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

          if(msgArray[index].msg.dataType){

            div2.style.flexDirection = "column";
            const img: HTMLImageElement = this.renderer.createElement('img');
            img.src = msgArray[index].msg.data;
            div2.appendChild(img);
            mgsContainer.appendChild(div2);
            this.div1.nativeElement.appendChild(mgsContainer);
  
          }
          else{
  
            this.text2 = msgArray[index].msg;
            div2.innerText = this.text2
            mgsContainer.appendChild(div2);
            this.div1.nativeElement.appendChild(mgsContainer);
  
          }
  
        }
  
        else{
  
          const mgsContainer: HTMLElement = this.renderer.createElement('div');
          mgsContainer.className = "msg-container";
          mgsContainer.style.justifyContent = "flex-end";
          const div2: HTMLElement = this.renderer.createElement('div');
          div2.className = "out-msg";
          div2.style.flexDirection = "column";

          if(msgArray[index].msg.dataType){

            const img: HTMLImageElement = this.renderer.createElement('img');
            img.src = msgArray[index].msg.data;
            div2.appendChild(img);
            mgsContainer.appendChild(div2);
            this.div1.nativeElement.appendChild(mgsContainer);
  
          }
          
          else{
  
            this.text2 = msgArray[index].msg;
            div2.innerText = this.text2
            mgsContainer.appendChild(div2);
            this.div1.nativeElement.appendChild(mgsContainer);
  
          }
  
        }
        
      }


    });

    this.chatservice.socket.on('send-img', (data) => {
     
      var msg = data.msg;
      var src = data.src;
      var datetime = data.datetime;

      var index = this.messages.findIndex(el => el.username === this.username);

      if(index === -1){

        this.messages.push(

          {
            username: this.username,
            msgs: [{type:'in',msg: {dataType: "img", data: msg, src:src}, datetime}],
            isRead: false,
            msgCount: 1,
            userImage: './assets/notification-image4.png'
          }

        )

      }

      else{

       this.messages[index].msgs.push({type:'in',msg: {dataType: "img", data: msg, src:src}, datetime});
       this.messages[index].isRead = false;
       this.messages[index].msgCount++

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

          if(msgArray[index].msg.dataType){

            div2.style.flexDirection = "column";
            const img: HTMLImageElement = this.renderer.createElement('img');
            img.src = msgArray[index].msg.src;
            div2.appendChild(img);
            mgsContainer.appendChild(div2);
            this.div1.nativeElement.appendChild(mgsContainer);
  
          }
          else{
  
            this.text2 = msgArray[index].msg;
            div2.innerText = this.text2
            mgsContainer.appendChild(div2);
            this.div1.nativeElement.appendChild(mgsContainer);
  
          }
  
        }
  
        else{
  
          const mgsContainer: HTMLElement = this.renderer.createElement('div');
          mgsContainer.className = "msg-container";
          mgsContainer.style.justifyContent = "flex-end";
          const div2: HTMLElement = this.renderer.createElement('div');
          div2.className = "out-msg";
          div2.style.flexDirection = "column";

          if(msgArray[index].msg.dataType){

            const img: HTMLImageElement = this.renderer.createElement('img');
            img.src = msgArray[index].msg.src;
            div2.appendChild(img);
            mgsContainer.appendChild(div2);
            this.div1.nativeElement.appendChild(mgsContainer);
  
          }
          
          else{
  
            this.text2 = msgArray[index].msg;
            div2.innerText = this.text2
            mgsContainer.appendChild(div2);
            this.div1.nativeElement.appendChild(mgsContainer);
  
          }
  
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

    if(this.sendFileDetails.length){

      var index = this.messages.findIndex(el => el.username === this.username);
      let d = new Date();
      let datetime = d.toLocaleString();


      for( let i= 0; i < this.sendFileDetails.length; i++){

        div2.style.flexDirection = "column";
        const img: HTMLImageElement = this.renderer.createElement('img');

        if(this.sendFileDetails[i].type.includes("image")){

          img.src = this.sendFileDetails[i].content;
          img.addEventListener("click", this.viewImage.bind(img)); //Image zooming
          div2.appendChild(img);
          mgsContainer.appendChild(div2);
          this.div1.nativeElement.appendChild(mgsContainer);
          this.chatservice.socket.emit('send-img',{username: this.username, msg: this.sendFileDetails[i].content, src: this.sendFileDetails[i].content, name:this.sendFileDetails[i].name});
          
           //Update messages
          if(index === -1){
    
            this.messages.push(
      
              {
                username: this.username,
                msgs: [{type:'out',msg: {dataType: "img", data: this.sendFileDetails[i].content, src: this.sendFileDetails[i].content}, datetime}],
                isRead: true,
                msgCount: 0,
                userImage: './assets/notification-image4.png'
              }
      
            )
      
          }
      
          else{
      
          this.messages[index].msgs.push({type:'out',msg: {dataType: "img", data: this.sendFileDetails[i].content,src: this.sendFileDetails[i].content}, datetime});
          this.messages[index].isRead = true;
          this.messages[index].msgCount = 0
    
          }
          
        }

        else{

          var item = this.sendFileDetails[i];

          // console.log(item)

          img.src = './assets/message/fileicon.png';

          //file downloading part
          const icon: HTMLImageElement = this.renderer.createElement('img');
          icon.className = "download-icon"
          icon.src = './assets/message/download.png'
          this.renderer.listen(icon, 'click', (event) => {
            this.downloadFile(item)
          });

          const div3: HTMLElement = this.renderer.createElement('div');
          div3.className = "file-name";
          div3.innerText = this.sendFileDetails[i].name;
          div3.appendChild(icon);
          div2.appendChild(img);
          div2.appendChild(div3);
          mgsContainer.appendChild(div2);
          this.div1.nativeElement.appendChild(mgsContainer);
          this.chatservice.socket.emit('send-img',{username: this.username, msg: this.sendFileDetails[i].content, src:img.src, name:this.sendFileDetails[i].name});
          var xv ={username: this.username, msg: this.sendFileDetails[i].content, src:img.src, name:this.sendFileDetails[i].name}
console.log(xv)

          //Update messages
          if(index === -1){
    
            this.messages.push(
      
              {
                username: this.username,
                msgs: [{type:'out',msg: {dataType: "img", data: this.sendFileDetails[i].content,src:img.src}, datetime}],
                isRead: true,
                msgCount: 0,
                userImage: './assets/notification-image4.png'
              }
      
            )
      
          }
      
          else{
      
          this.messages[index].msgs.push({type:'out',msg: {dataType: "img", data: this.sendFileDetails[i].content,src:img.src,}, datetime});
          this.messages[index].isRead = true;
          this.messages[index].msgCount = 0
    
          }

        }

        
       

       
      }

      this.sendFileDetails = [];
      this.uplodedFileContents = [];
     
    }
  }

  async uploadFile(ev) {

    debugger

    const file = ev.target.files[0];

    var fileType = file.type;
    var fileName = file.name;

    // console.log(fileType)
  
    
    if(fileType.includes("image")){

      this.image = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      );

      this.uplodedFileContents.push(
        {src:this.image,
        name:fileName.substring(0, 6)});

      const fileObjImg = await this.convertBase64(file);

      var fileObjImgWithName = Object.assign({},fileObjImg,{name:fileName});

      this.sendFileDetails.push(fileObjImgWithName);
        
    }

    else{

      this.image = './assets/message/fileicon.png';

      this.uplodedFileContents.push(
        {src:this.image,
        name:fileName.substring(0, 6)});

      const fileObjTxt = await this.convertBase64(file);

      var fileObjTxtWithName = Object.assign({},fileObjTxt,{name:fileName});

      this.sendFileDetails.push(fileObjTxtWithName);
      

    }

  }


  convertBase64 = (file) => {

    return new Promise((resolve, reject) => {

        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = () => {

            resolve({
              type: fileReader.result.toString().split(';')[0],
              content:fileReader.result.toString()
            });
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
  };


  removeImage(idx){

    this.uplodedFileContents.splice(idx, 1);
    this.sendFileDetails.splice(idx, 1);

  }


  viewImage(event) {

    let viewer = new Viewer(event.currentTarget, {
      navbar: false,
      toolbar: false,
      viewed() {

        viewer.zoomTo(1);
        viewer['image'].style.border = '10px solid white';
        viewer['image'].style['border-radius'] = '10px';

      }
     
    });

    viewer.show();
  }

  async downloadFile(data){

    var base64 = data.content;
    var name = data.name;

    var base64Response = await fetch(base64)
    
    const blob = await base64Response.blob();

    
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename
    a.download = name;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
   
  }

}

interface IMessage {
  username: string,
  msgs: any[],
  isRead: boolean,
  msgCount: number,
  userImage: string
}


