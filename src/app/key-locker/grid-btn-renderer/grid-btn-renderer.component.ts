import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-grid-btn-renderer',
  template: `
    <div 
      style="display: flex; 
      flex-direction: column; 
      width: 100%; 
      height: 100%;
      align-items: center; 
      justify-content: center; 
      font-family: 'Open Sans'; 
      font-style: normal; 
      font-weight: 600; 
      font-size: 16px; 
      line-height: 22px; 
      letter-spacing: 0.01em; 
      cursor: pointer;"
      [style.color]="color"
      [style.text-decoration-line]="textdecorator"
      (click)="btnClickedHandler()"
    >
      {{ label }}
    </div>
  `
})
export class GridBtnRendererComponent implements ICellRendererAngularComp {

  private params: any;
  label: string;
  color: string = '#F9A369';
  textdecorator: string = 'underline';

  constructor(){

  }

  agInit(params: any): void {

    this.params = params;

    if(params.colDef.field === 'actBtn')
      this.label = 'Observe';
    else
      if(params.colDef.field === 'Closed'){
        this.label = 'Review';
    }
    else
      if(params.colDef.field === 'ClaimStatus'){

        if(params.data.ClaimStatus.toLowerCase() === 'pending')
          this.color = '#D9534F';
        else
          this.color = '#5CB85C';

          this.label = params.data.ClaimStatus;
          this.textdecorator = 'unset';

      }
  }

  btnClickedHandler() {
    if(this.params.clickHandler)
      this.params.clickHandler(this.params)
  }

  refresh(){
    return true;
  }

}
