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
      width: 350,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Last Bid',
      field: 'LastBid',
      width: 350,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Increment',
      field: 'Increment',
      width: 350,
      resizable: true,
      sort: 'asc',
      cellRenderer: this.incrementRenderer
    }
  ];

  observeRowData = [
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: 25
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: 25
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: 25
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: 25
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: 25
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: 25
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: 25
    },
    {
      No: '01.',
      UserName: 'Esther Howard',
      LastBid: '$319.25',
      Increment: 25
    }

  ];

  reviewColumnDefs = [
    {  
      headerName: 'Active Bidder',
      field: 'ActiveBidder',
      width: 200,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Total Bid Activity',
      field: 'TotalBidActivity',
      width: 350,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Hold Time',
      field: 'HoldTime',
      width: 350,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Total Time (Hour)',
      field: 'TotalTime',
      width: 350,
      resizable: true,
      sort: 'asc'
    }
  ];

  reviewRowData = [
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
    },
    {
      ActiveBidder: 'Esther Howard',
      TotalBidActivity: '$319.25',
      HoldTime: '20h 45m',
      TotalTime: '20h 45m'
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

  incrementRenderer(params:any){

    var ui = document.createElement('div');

    ui.style['display'] = 'flex';
    ui.style['flex-direction'] = 'row';
    ui.style['align-items'] = 'center';
    ui.style['justify-content'] = 'center';
    ui.style['width'] = '100%';

    ui.innerHTML = `
      <img src="./assets/key-locker/icons/increase.png" style="width: 29px; height: 29px; margin-right: 30px;">
      <div style="font-family: 'Open Sans'; font-style: normal; font-weight: 600; font-size: 12px; line-height: 22px; letter-spacing: 0.01em; color: #F9A369">
        ${params.data.Increment}%
      </div>
    `

    return ui;

  }

}
