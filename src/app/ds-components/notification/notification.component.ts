import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notificationItem;

  constructor() {

    
   }

  ngOnInit(): void {

    this.notificationItem = this.notifications[0];
  }
  
 
  notifications = [
    
    {
      image: './assets/notification-image.png',
      text: 'Congratulations! You are the Winner! of the Auction House',
      caption: 'Heffel Fine Art Auction House',
      time: 'Justnow'
    },

    {
      image: './assets/notification-image.png',
      text: 'Congratulations! You are the Winner! of the Auction House',
      caption: 'Heffel Fine Art Auction House',
      time: 'Justnow'
    },

    {
      image: './assets/notification-image.png',
      text: 'Congratulations! You are the Winner! of the Auction House',
      caption: 'Heffel Fine Art Auction House',
      time: 'Justnow'
    },

    {
      image: './assets/notification-image2.png',
      text: 'Congratulations! You are the Winner! of the Auction House',
      caption: 'Heffel Fine Art Auction House',
      time: 'Justnow'
    },

    {
      image: './assets/notification-image3.png',
      text: 'Congratulations! You are the Winner! of the Auction House',
      caption: 'Heffel Fine Art Auction House',
      time: 'Justnow'
    },

    {
      image: './assets/notification-image4.png',
      text: 'Please Verify Your Email Address.',
      caption: '',
      time: 'Justnow'
    },

    {
      image: './assets/notification-image4.png',
      text: 'Please Verify Your Email Address.',
      caption: '',
      time: 'Justnow'
    },

    {
      image: './assets/notification-image4.png',
      text: 'Please Verify Your Email Address.',
      caption: '',
      time: 'Justnow'
    },
    

  ]

}
