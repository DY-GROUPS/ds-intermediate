import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { IMessageStream, Interconnect } from 'ng-interconnect';
import { settingPopupScreen } from '../ds-types';

@Component({
  selector: 'app-settings-popup',
  templateUrl: './settings-popup.component.html',
  styleUrls: ['./settings-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsPopupComponent implements OnInit {

  @Input() screen = 'test1';
  @Input() caption = 'hidden';
  @Input() showBackBtn: boolean = false;
  @Output() closeDialog = new EventEmitter<any>();
  popupScreen = settingPopupScreen;
  showpopup: IMessageStream | Promise<IMessageStream>;
  
  constructor(private interconnect: Interconnect) {

    this.showpopup = interconnect.connectToListener('home/changeSettingPopup', 'settings');

    if (this.showpopup['then']) {
      this.showpopup['then']((notifier) => this.showpopup = notifier);
    }

  }

  ngOnInit(): void {
  }

  close(){
    this.closeDialog.emit();
  }

  showPopup(view, caption, showBackBtn){

    (this.showpopup as IMessageStream).emit({view, caption, showBackBtn});

  }

}
