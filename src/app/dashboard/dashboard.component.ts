import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPopupConfigs, IPopupCpmmands, ICard } from '../ds-components/ds-types';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('dragbtn') dragbtn: ElementRef;
  @ViewChild('drop') drop: ElementRef;
 
  @ViewChild('droptxt') droptxt: ElementRef;

  isOk: boolean = false;

  placeBid: boolean = false;
  currentPopopWindowIdx: number = 0;
  popupData: IPopupConfigs[];
  currentPopupPage: IPopupConfigs;
  currentRoom;

  timerHours = 23;
  timerMin = 59;
  timerSec = 59;

  arrowUp;

  cards: ICard[] = [
    {
      icon: './assets/dasboard/home.png',
      title: 'Auction Houses',
      info: '35',
      infoIcon: './assets/dasboard/info.png'
    },
    {
      icon: './assets/dasboard/users.png',
      title: 'Online Users',
      info: '13,986',
      infoIcon: ''
    },
    {
      icon: './assets/dasboard/settings.png',
      title: 'Last Winnig Bid',
      info: '$4,564',
      infoIcon: ''
    },
    {
      icon: './assets/dasboard/timer.png',
      title: 'Ending Soon',
      info: '187',
      infoIcon: ''
    }
  ]

  houses = [
    {
      label: 'Auction House 1',
      value: {
        id: 1,
        name: 'Auction House 1'
      }
    },
    {
      label: 'Auction House 2',
      value: {
        id: 2,
        name: 'Auction House 2'
      }
    }
  ]

  rooms = [
    {
      houseImage: './assets/dasboard/house.png',
      title: 'Heffel Fine Art Auction House',
      info: {
        startBid: '50.00',
        heighestBid: '4575.00',
        totalBids: '89'
      },
      biddingInfo: {
        title: 'Duplex Auction House',
        desc: `Duplex means that we select two winners from this house by
                holding two auctions, means two bidding rooms. One bidding room at a time
                will start at 50$. The entrants will have to place their first bid for 50$ or
                greater to be the first occupant (Winning Spot). The next highest bidder will
                become the next occupant. After the number of paid entrants reach 50,000 a
                48 hour clock starts counting down for when this bidding room ends. Highest
                bidder after the 48 hour clock runs out moves on the Eligibility. In that Auction
                House, the first bidding room is in Pending Status. Those 49,999+ from the
                first bidding room are automatically moved to the final bidding room that
                starts at 50$ and a 21 day timer automatically begins.`,
        list: ['Duplex', '100$ entry fee', '2 total bidding rooms, 1 at a time.', 'After 50000 entrants, 48 hour countdown till end', '49,999+ rollover to 2nd bidding room.']
      },
      type: 1
    },
    {
      houseImage: './assets/dasboard/house.png',
      title: 'Heffel Fine Art Auction House',
      info: {
        startBid: '50.00',
        heighestBid: '4575.00',
        totalBids: '89'
      },
      biddingInfo: {
        title: 'Duplex Auction House',
        desc: `Duplex means that we select two winners from this house by
                holding two auctions, means two bidding rooms. One bidding room at a time
                will start at 50$. The entrants will have to place their first bid for 50$ or
                greater to be the first occupant (Winning Spot). The next highest bidder will
                become the next occupant. After the number of paid entrants reach 50,000 a
                48 hour clock starts counting down for when this bidding room ends. Highest
                bidder after the 48 hour clock runs out moves on the Eligibility. In that Auction
                House, the first bidding room is in Pending Status. Those 49,999+ from the
                first bidding room are automatically moved to the final bidding room that
                starts at 50$ and a 21 day timer automatically begins.`,
        list: ['Duplex', '100$ entry fee', '2 total bidding rooms, 1 at a time.', 'After 50000 entrants, 48 hour countdown till end', '49,999+ rollover to 2nd bidding room.']
      },
      type: 0
    }
  ]

  selectedHouse;

  constructor() { }

  ngOnInit(): void {

    this.popupData = [
      {
        header: 'Place Bid',
        contentHeader: '',
        content: ``,
        bckButton: false,
        nxtButton: false,
        customContents: 'placeBid',
        showFooter: false
      },
      {
        header: 'Place Bid',
        contentHeader: '',
        content: `
          <div style="width: 100%; text-align: center;">

            <div style="font-family: 'Open Sans'; font-style: normal; font-weight: 700; font-size: 32px; line-height: 28px; color: #2C2C2C; margin-bottom: 15px;">
                Heffel Fine Art Auction House
            </div>

            <div style="font-family: 'Open Sans'; font-style: normal; font-weight: 600; font-size: 20px; line-height: 28px; color: #2C2C2C; margin-bottom: 20px;">
                Duplex Auction House
            </div>

            <div style="font-family: 'Open Sans'; font-style: normal; font-weight: 400; font-size: 20px; line-height: 28px; color: #2C2C2C; margin-bottom: 40px;">
                Current Bid : $4575
            </div>

          </div>

          <div style="width: 100%; height: 0px; border: 1px solid rgba(44, 44, 44, 0.2); margin-bottom: 56px;"></div>

          <div style="width: 100%;display: flex; flex-direction: column; justify-content: flex-start; align-items: center;">

            <label style="
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 42px;
                line-height: 28px;
                color: #F9A369;
            ">
                Success
            </label>

            <label style="
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 28px;
                text-align: justify;
                color: #2C2C2C;
                margin-top: 21px;
            ">
                Your Bid for $4800 is now live
            </label>

            <label style="
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 28px;
                text-align: justify;
                color: #2C2C2C;
                margin-top: 80px;
            ">
                Share Your Ask
            </label>

            <div style="display: flex; flex-direction: row; justify-content: space-between; width: 267px; height: 48px; margin-top: 35px;">

              <img style="width: 48px; height: 48px;" src="./assets/dasboard/icons/fb.png">
  
              <img style="width: 48px; height: 48px;" src="./assets/dasboard/icons/twitter.png">
  
              <img style="width: 48px; height: 48px;" src="./assets/dasboard/icons/pinterest.png">
  
              <img style="width: 48px; height: 48px;" src="./assets/dasboard/icons/google_plus.png">
  
            </div>

          </div>

        `,
        bckButton: false,
        nxtButton: false,
        showFooter: true,
        customFooterButton: 'finish'
      }
    ]

    this.currentPopupPage = this.popupData[0];
    this.selectedHouse = this.houses[0].value;
    this.currentRoom = this.rooms[0];

    setInterval(() => {
      this.clockTicking();
    }, 1000) 

  }

  showPlaceBid(){

    this.placeBid = true;

  }

  setRoom(){
    let idx = this.houses.findIndex(el => el.value.id === this.selectedHouse.id);
    this.currentRoom = this.rooms[idx];
  }

  recieveFromPopupDialog(e){
    
    switch(e.command){

      case IPopupCpmmands.close:
 
        this.currentPopopWindowIdx = 0;
        this.placeBid = false; 

      break;
      case IPopupCpmmands.reviewBid: this.currentPopopWindowIdx++; break;

    }

    this.currentPopupPage = this.popupData[this.currentPopopWindowIdx];

    

  }

  dragEnd() {
    // console.log('end');
    var slideButton = this.drop.nativeElement;
    var arrowIcon = this.dragbtn.nativeElement;
  
    var slideButtonPosition = slideButton.getBoundingClientRect();
    var arrowIconPosition = arrowIcon.getBoundingClientRect();
  
    var slideButtonPositionCount = slideButtonPosition.x + slideButtonPosition.width;
    var arrowIconPositionCount = arrowIconPosition.x + arrowIconPosition.width;
  
    if (slideButtonPositionCount == arrowIconPositionCount) {
       this.isOk = true;
    }
    else {
      this.isOk = false;
    }
  }

  clockTicking(){
	
    this.timerSec --;
   
    if(this.timerSec === 0){

      this.timerSec = 59;
      this.timerMin --;

    }


    if(this.timerMin === 0){
    
      this.timerMin = 59;
      this.timerHours --;
       
    }

    
    if(this.timerHours === 0){

      this.timerHours = 23;
      
    }
 
  }

  dropdownText(){
     
    var content = this.droptxt.nativeElement;

    if (content.style.display === "block") {

      content.style.display = "none";
      this.arrowUp = false;

    } 

    else {
      content.style.display = "block";
      this.arrowUp = true;
    }
  
  }

}
