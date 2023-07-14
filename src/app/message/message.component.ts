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

 

  constructor(

    private chatservice:ChatService,
    private renderer:Renderer2,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef

  ) { 

  }

  ngOnInit(): void {

  } 

}


