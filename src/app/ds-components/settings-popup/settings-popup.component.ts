import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { settingPopupScreen } from '../ds-types';

@Component({
  selector: 'app-settings-popup',
  templateUrl: './settings-popup.component.html',
  styleUrls: ['./settings-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsPopupComponent implements OnInit {

  @Input() screen = 'test1';
  @Input() caption = true;
  @Output() closeDialog = new EventEmitter<any>();
  popupScreen = settingPopupScreen;
  
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.closeDialog.emit();
  }

}
