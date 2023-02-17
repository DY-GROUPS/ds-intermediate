import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-popup',
  templateUrl: './settings-popup.component.html',
  styleUrls: ['./settings-popup.component.scss']
})
export class SettingsPopupComponent implements OnInit {

  @Input() screen = 'test1';
  
  constructor() { }

  ngOnInit(): void {
  }

}
