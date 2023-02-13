import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  inboxItem;

  constructor() { }

  ngOnInit(): void {

    this.inboxItem = this.inboxItem[0];
  }

  messages = [
    
    {
      image: './assets/inbox-image.png',
      text: 'Missing Buyer ID Type',
      time: 'Justnow'
    },

    {
      image: './assets/inbox-image.png',
      text: 'Incorrect input for Investment Decision ID Type',
      time: '2d'
    },

    {
      image: './assets/inbox-image.png',
      text: 'Incorrect input for Investment Decision ID Type',
      time: '2d'
    },

    {
      image: './assets/inbox-image.png',
      text: 'Incorrect input for Investment Decision ID Type',
      time: '7d'
    },

    {
      image: './assets/inbox-image.png',
      text: 'Incorrect input for Investment Decision ID Type',
      time: '1y'
    },

    {
      image: './assets/inbox-image.png',
      text: 'Incorrect input for Firm Execution ID Type',
      time: '1y'
    },

    {
      image: './assets/inbox-image.png',
      text: 'Incorrect input for Investment Decision ID Type',
      time: '1y'
    },
    {
      image: './assets/inbox-image.png',
      text: 'Incorrect input for Investment Decision ID Type',
      time: '1y'
    },
    

  ]


}
