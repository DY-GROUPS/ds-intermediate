import { Component, OnInit } from '@angular/core';
import { ICard, IPopupConfigs, IPopupCpmmands, IUser } from '../ds-components/ds-types';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {


  cards: ICard[] = [
    {
      icon: './assets/dasboard/home.png',
      title: 'Entries',
      info: '35',
      infoIcon: ''
    },
    {
      icon: './assets/dasboard/users.png',
      title: 'Cash Spent',
      info: '$3,435',
      infoIcon: ''
    },
    {
      icon: './assets/dasboard/users.png',
      title: 'Successful Invites',
      info: '189',
      infoIcon: ''
    },
    {
      icon: './assets/dasboard/settings.png',
      title: 'Bid Placed',
      info: '50',
      infoIcon: ''
    },
    {
      icon: './assets/dasboard/send.png',
      title: 'Contracts Won',
      info: '187',
      infoIcon: ''
    }
  ]

  popupData: IPopupConfigs[];

  currentPopupPage: IPopupConfigs;
  showPopupWindow: boolean = false;
  width: number = 500;
  height: number = 500;

  currentUser: IUser;

  constructor(private profileService: ProfileService) { 

    this.currentUser = profileService.getUser();
    
  }

  ngOnInit(): void {

    this.popupData = [
      {
        header: 'Change Phone Number',
        contentHeader: 'Choose a reason',
        content: `phone`,
        bckButton: false,
        nxtButton: false,
        customContents: 'change-phone-number',
        showFooter: false
      },
      {
        header: 'Change Address',
        contentHeader: 'Choose a reason',
        content: `address`,
        bckButton: false,
        nxtButton: false,
        customContents: 'change-address',
        showFooter: false
      }
      
    ]

  }

  recieveFromPopupDialog(e){
    
    switch(e.command){

      case IPopupCpmmands.close:
        this.showPopupWindow = false;
        

      break;
      case IPopupCpmmands.submit:

        this.showPopupWindow = false;

      break;

    }
    

  }

  changeAddress(){

    this.currentPopupPage = this.popupData[1];
    this.showPopupWindow = true;

  }

  changePhoneNumber(){

    this.currentPopupPage = this.popupData[0];
    this.showPopupWindow = true;

  }

}
