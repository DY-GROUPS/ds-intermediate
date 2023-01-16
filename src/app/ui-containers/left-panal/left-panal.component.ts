import { Component, ElementRef, OnInit } from '@angular/core';
import { Interconnect, IMessageStream } from 'ng-interconnect';
import { MainViews } from 'src/app/app.types';

@Component({
  selector: 'app-left-panal',
  templateUrl: './left-panal.component.html',
  styleUrls: ['./left-panal.component.scss']
})
export class LeftPanalComponent implements OnInit {

  private changeView: IMessageStream | Promise<IMessageStream>;
  _MainViews = MainViews;
  showBackground: boolean = false;
  showCards: boolean = true;
  enterBtn = './assets/btn-icons/icons8_enter 1.png';
  dashboardBtn = './assets/btn-icons/user.png';
  lockerBtn = './assets/btn-icons/icons8_key 1.png';
  settingsBtn = './assets/btn-icons/settings.png';

  constructor(private interconnect: Interconnect, private elem: ElementRef) {

    this.changeView = interconnect.connectToListener('home/changeView', 'leftbar');
    if (this.changeView['then']) {
      this.changeView['then']((notifier) => this.changeView = notifier);
    }

  }

  ngOnInit(): void {

    this.interconnect.createListener('leftbar/changeView', (_connection, command) => {

      // Notify home
      (this.changeView as IMessageStream).emit({mainView: command.viewId});

      // UI elements
      this.showBackground = command.showBackground;
      this.showCards = command.showCards;

      // Reset button icons
      this.enterBtn = './assets/btn-icons/icons8_enter 1-gray.png';
      this.dashboardBtn = './assets/btn-icons/user.png';
      this.lockerBtn = './assets/btn-icons/icons8_key 1.png';
      this.settingsBtn = './assets/btn-icons/settings.png';

      // Remove selected items
      Array.from(this.elem.nativeElement.querySelectorAll('.main-btns')).forEach((btn: any) => btn.classList.remove('select'));


		})

  }

  userChangeView(viewId, showBackground: boolean, showCards: boolean){

    (this.changeView as IMessageStream).emit({mainView: viewId});

    // UI elements
    this.showBackground = showBackground;
    this.showCards = showCards;

    this.buttonsIconChange(viewId);


  }

  private buttonsIconChange(viewId){

    let leftbarButtons = Array.from(this.elem.nativeElement.querySelectorAll('.main-btns'));
    
    leftbarButtons.forEach((btn: any) => {

      let btnId = +btn.id;

      if(btnId === viewId && btnId !== 999){

        switch(viewId){

          case this._MainViews.enterScreen: 
            this.enterBtn = './assets/btn-icons/icons8_enter 1.png';
            this.dashboardBtn = './assets/btn-icons/user.png';
            this.lockerBtn = './assets/btn-icons/icons8_key 1.png';
            this.settingsBtn = './assets/btn-icons/settings.png';
          break;

          case this._MainViews.dashboard:
            this.dashboardBtn = './assets/btn-icons/dashboard-white.png';
            this.enterBtn = './assets/btn-icons/icons8_enter 1-gray.png';
            this.lockerBtn = './assets/btn-icons/icons8_key 1.png';
            this.settingsBtn = './assets/btn-icons/settings.png';
          break;

          case this._MainViews.keyLocker:
            this.dashboardBtn = './assets/btn-icons/user.png';
            this.enterBtn = './assets/btn-icons/icons8_enter 1-gray.png';
            this.lockerBtn = './assets/btn-icons/locker-white.png';
            this.settingsBtn = './assets/btn-icons/settings.png';
          break;

          case this._MainViews.settings:
            this.dashboardBtn = './assets/btn-icons/user.png';
            this.enterBtn = './assets/btn-icons/icons8_enter 1-gray.png';
            this.lockerBtn = '/assets/btn-icons/icons8_key 1.png';
            this.settingsBtn = './assets/btn-icons/settings-white.png';
          break;

        }

        btn.classList.add('select');

      }
      else
        btn.classList.remove('select');

    })

  }

}
