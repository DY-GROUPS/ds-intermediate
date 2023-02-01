import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

import { IPopupConfigs, IPopupCpmmands } from '../ds-types';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopupComponent implements OnInit {

  @Input() display: boolean = false;
  @Input() popupData: IPopupConfigs;
  @Input() width: number;
  @Input() height: number;

  @Output() notifyParent = new EventEmitter<any>();

  contentLines;
  paymenttype: string = '';

  observeColumnDefs = [
    {  
      headerName: 'No',
      field: 'No',
      width: 200,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'User Name',
      field: 'UserName',
      width: 550,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Last Bid',
      field: 'LastBid',
      width: 550,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Increment',
      field: 'Increment',
      width: 525,
      resizable: true,
      sort: 'asc'
    }
  ];

  observeRowData = [
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: ''
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: ''
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: ''
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: ''
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: ''
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: ''
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: ''
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: ''
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

  close(customClose){
    this.sendCommandToParent(IPopupCpmmands.close, customClose);
  }

  sendCommandToParent(command, customCommand = false){
    
    switch(command){
      case IPopupCpmmands.close: this.notifyParent.emit({command: IPopupCpmmands.close, customCommand: 'closeTearms'}); break;
      case IPopupCpmmands.next: this.notifyParent.emit({command: IPopupCpmmands.next}); break;
      case IPopupCpmmands.back: this.notifyParent.emit({command: IPopupCpmmands.back}); break;
      case IPopupCpmmands.showTearms: this.notifyParent.emit({command: IPopupCpmmands.showTearms}); break;
      case IPopupCpmmands.showPrivacyPolicy: this.notifyParent.emit({command: IPopupCpmmands.showPrivacyPolicy, customCommand: 'closePrivacyPolicy'}); break;
      case IPopupCpmmands.submit: this.notifyParent.emit({command: IPopupCpmmands.submit}); break;
      case IPopupCpmmands.reviewBid: this.notifyParent.emit({command: IPopupCpmmands.reviewBid}); break;
    }

  }

}
