import { Component, OnInit } from '@angular/core';
import { IMessageStream, Interconnect } from 'ng-interconnect';
import { settingPopupScreen } from '../ds-components/ds-types';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  showpopup: IMessageStream | Promise<IMessageStream>;
  settingPopupScreen = settingPopupScreen;

  constructor(private interconnect: Interconnect) {

    this.showpopup = interconnect.connectToListener('home/changeSettingPopup', 'settings');

    if (this.showpopup['then']) {
      this.showpopup['then']((notifier) => this.showpopup = notifier);
    }

  }

  ngOnInit(): void {
  }

  showPopup(view, caption){

    (this.showpopup as IMessageStream).emit({view, caption});

  }


}
