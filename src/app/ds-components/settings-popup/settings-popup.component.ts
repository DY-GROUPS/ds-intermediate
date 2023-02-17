import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-settings-popup',
  templateUrl: './settings-popup.component.html',
  styleUrls: ['./settings-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsPopupComponent implements OnInit {

  @Input() screen = 'test1';
  
  constructor() { }

  ngOnInit(): void {
  }

}
