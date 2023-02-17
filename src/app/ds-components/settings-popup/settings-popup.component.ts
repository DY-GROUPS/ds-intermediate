import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.closeDialog.emit();
  }

}
