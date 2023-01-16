import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ICard, IInvites } from '../ds-components/ds-types';

@Component({
  selector: 'app-key-locker',
  templateUrl: './key-locker.component.html',
  styleUrls: ['./key-locker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KeyLockerComponent implements OnInit {

  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;
  currentView = "Contracts Won"

  activeColumnDefs = [
    {  
      headerName: '#ID',
      field: 'ID',
      width: 100,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Room Number',
      field: 'RoomNumber',
      width: 200,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Highest Bid',
      field: 'HighestBid',
      width: 200,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Capacity Meter',
      field: 'CapacityMeter',
      width: 200,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Timer',
      field: 'Timer',
      width: 200,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: '',
      field: 'actBtn',
      width: 200,
      resizable: true,
      sort: 'asc',
      cellRenderer: this.buttonRenderer
    }
  ];


  activeRowData = [
    {
      ID: '1.1',
      RoomNumber: '1.1-4',
      HighestBid: '$629.43',
      CapacityMeter: '100%',
      Timer: '28:36:17'
    },
    {
      ID: '8.2',
      RoomNumber: '8.2-3',
      HighestBid: '$231.50',
      CapacityMeter: '80%',
      Timer: '-'
    },
    {
      ID: '1.1',
      RoomNumber: '1.1-4',
      HighestBid: '$629.43',
      CapacityMeter: '100%',
      Timer: '28:36:17'
    },
    {
      ID: '8.2',
      RoomNumber: '8.2-3',
      HighestBid: '$231.50',
      CapacityMeter: '80%',
      Timer: '-'
    },
    {
      ID: '1.1',
      RoomNumber: '1.1-4',
      HighestBid: '$629.43',
      CapacityMeter: '100%',
      Timer: '28:36:17'
    },
    {
      ID: '8.2',
      RoomNumber: '8.2-3',
      HighestBid: '$231.50',
      CapacityMeter: '80%',
      Timer: '-'
    },
    {
      ID: '1.1',
      RoomNumber: '1.1-4',
      HighestBid: '$629.43',
      CapacityMeter: '100%',
      Timer: '28:36:17'
    },
    {
      ID: '8.2',
      RoomNumber: '8.2-3',
      HighestBid: '$231.50',
      CapacityMeter: '80%',
      Timer: '-'
    }
  ];

  closeColumnDefs = [
    {  
      headerName: '#ID',
      field: 'ID',
      width: 100,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Room Number',
      field: 'RoomNumber',
      width: 200,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Winning Bid',
      field: 'WinningBid',
      width: 200,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Total Bids',
      field: 'TotalBids',
      width: 200,
      resizable: true,
      sort: 'asc'
    },
    {  
      headerName: 'Closed',
      field: 'Closed',
      width: 200,
      resizable: true,
      sort: 'asc',
      cellRenderer: this.buttonRenderer
    },
    {  
      headerName: 'Claim Status',
      field: 'ClaimStatus',
      width: 200,
      resizable: true,
      sort: 'asc',
      cellRenderer: this.buttonRenderer
    }
  ]

  closeRowData = [
    {
      ID: '1.2',
      RoomNumber: '1.2-4',
      WinningBid: '$629.43',
      TotalBids: '100',
      Closed: '',
      ClaimStatus: 'Pending'
    },
    {
      ID: '1.2',
      RoomNumber: '1.2-4',
      WinningBid: '$629.43',
      TotalBids: '100',
      Closed: '',
      ClaimStatus: 'Pending'
    },
    {
      ID: '1.2',
      RoomNumber: '1.2-4',
      WinningBid: '$629.43',
      TotalBids: '100',
      Closed: '',
      ClaimStatus: 'Pending'
    },
    {
      ID: '1.2',
      RoomNumber: '1.2-4',
      WinningBid: '$629.43',
      TotalBids: '100',
      Closed: '',
      ClaimStatus: 'Claimed'
    },
    {
      ID: '1.2',
      RoomNumber: '1.2-4',
      WinningBid: '$629.43',
      TotalBids: '100',
      Closed: '',
      ClaimStatus: 'Pending'
    },
    {
      ID: '1.2',
      RoomNumber: '1.2-4',
      WinningBid: '$629.43',
      TotalBids: '100',
      Closed: '',
      ClaimStatus: 'Claimed'
    },
    {
      ID: '1.2',
      RoomNumber: '1.2-4',
      WinningBid: '$629.43',
      TotalBids: '100',
      Closed: '',
      ClaimStatus: 'Claimed'
    },
    {
      ID: '1.2',
      RoomNumber: '1.2-4',
      WinningBid: '$629.43',
      TotalBids: '100',
      Closed: '',
      ClaimStatus: 'Pending'
    }
  ];

  cards: ICard[] = [
    {
      icon: './assets/dasboard/home.png',
      title: 'Entries',
      info: '35',
      infoIcon: '',
      background: './assets/key-locker/selected-background.png'
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

  invites: IInvites[] = [
    {
      name: 'Sasha Manin',
      email: 'Sashamaanin@hotmail.com',
      status: 'Joined'
    },
    {
      name: 'Sasha Manin',
      email: 'Sashamaanin@hotmail.com',
      status: 'Pending'
    },
    {
      name: 'Sasha Manin',
      email: 'Sashamaanin@hotmail.com',
      status: 'Joined'
    },
    {
      name: 'Sasha Manin',
      email: 'Sashamaanin@hotmail.com',
      status: 'Joined'
    },
    {
      name: 'Sasha Manin',
      email: 'Sashamaanin@hotmail.com',
      status: 'Pending'
    },
    {
      name: 'Sasha Manin',
      email: 'Sashamaanin@hotmail.com',
      status: 'Joined'
    }
  ]

  // Charts
  data: any;
  chartOptions: any;
  barData: any;

  constructor() { 
    this.data = {
      labels: ['08/2023', '09/2023', '10/2023', '11/2023', '12/2023', '13/2023', '14/2023'],
      datasets: [
        {
          data: [50, 150, 150, 200, 500, 500, 800],
          fill: false,
          borderColor: '#F9A369',
          pointBackgroundColor: '#72CDC2',
          pointBorderColor: '#72CDC2',
          lineTension: 0
        }
      ]
    }

    this.chartOptions = {
      legend: {display: false},
      maintainAspectRatio: false,
      scales: {
        x: [{
          ticks: {
            padding: {
              left: 20
            }
          }
        }]
      }
    }

    this.barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  }
  }

  ngOnInit(): void {

    if(this.agGrid)
      this.agGrid.getRowHeight = () => 55;

  }

  buttonRenderer(params:any){

    var ui = document.createElement('div');

    ui.style['display'] = 'flex';
    ui.style['flex-direction'] = 'column';
    ui.style['align-items'] = 'center';
    ui.style['justify-content'] = 'center';
    ui.style.width = '100%';
    ui.style['text-align'] = 'center';
    ui.style['font-family'] = 'Open Sans';
    ui.style['font-style'] = 'normal';
    ui.style['font-weight'] = '600';
    ui.style['font-size'] = '16px';
    ui.style['line-height'] = '22px';
    ui.style['letter-spacing'] = '0.01em';
    ui.style['text-decoration-line'] = 'underline';
    ui.style['color'] = '#F9A369';
    ui.style['cursor'] = 'pointer';

    if(params.colDef.field === 'actBtn')
      ui.innerHTML = 'Observe';
    else
      if(params.colDef.field === 'Closed'){
        ui.innerHTML = 'Review';
      }
      else
        if(params.colDef.field === 'ClaimStatus'){

          if(params.data.ClaimStatus.toLowerCase() === 'pending')
            ui.style['color'] = '#D9534F';
          else
            ui.style['color'] = '#5CB85C';

            ui.innerHTML = params.data.ClaimStatus;
            ui.style['text-decoration-line'] = 'unset';

        }
          

    return ui;

  }

  viewChange(aCard){

    this.currentView = aCard.title;
    this.cards.forEach(el => {

      if(el.title === aCard.title)
        el.background = './assets/key-locker/selected-background.png';
      else
        el.background = ''
    })


  }

}
