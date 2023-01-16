import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ICard, IInvites } from '../ds-components/ds-types';
import * as Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
  chartData: any;
  chartOptions: any;
  chartHeight: number = 550;
  chartWidth: number = 1050;

  constructor() { 

    this.chartData = {

      cashSpent: {
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

      },
      contractsWon: {
        labels: ['Single Auction House', 'Duplex Auction House', 'Commercial Auction House'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: '#ED8646',
            borderColor: '#ED8646',
            data: [250, 450, 300]
          }
        ]

      },
      bids: {
        labels: ['Pioneer Contract,','STL Division','Trailblazer Contract', 'Sectional Contract', 'ATL Division'],
        datasets: [
          {
            data: [300, 50, 100, 45, 38],
            backgroundColor: [
              "#95CED1",
              "#FCDA61",
              "#F9A369",
              '#EB9FA6',
              '#F6CBC6'
            ],
            hoverBackgroundColor: [
              "#95CED1",
              "#FCDA61",
              "#F9A369",
              '#EB9FA6',
              '#F6CBC6'
            ]
          }
        ]    
      }

    }

    this.chartOptions = {

      cashSpent: {
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
      },
      contractsWon: {
        legend: {display: false},
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            maxBarThickness: 40
          }],
          yAxes: [{
            ticks: {
              fontFamily: 'Roboto', 
              fontSize: 12, 
              callback: (value)=> {
                return '$' + value
              }
              
            }
          }]
        }
      },
      bids: {
        plugins: {
          // datalabels: {
          //   /* show value in percents */
          //   // formatter: (value, ctx) => {
          //   //   let sum = 0;
          //   //   const dataArr = ctx.chart.data.datasets[0].data;
          //   //   dataArr.map(data => {
          //   //         sum += data;
          //   //   });
          //   //   const percentage = (value * 100 / sum); 
          //   //   return percentage !== 0 ? percentage.toFixed(2) + '%' : '';
          //   // },
          //   color: 'red',
          //   align: 'top'
          // },

          
        },
        legend: {
          display: true,
          labels: {
            color: 'rgb(255, 99, 132)'
          },
          position: 'right',
          fullSize: true,
          borderWidth: 10
        }

      }

    }


  }

  ngOnInit(): void {

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
