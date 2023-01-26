import { Component, OnInit } from '@angular/core';
import { Interconnect } from 'ng-interconnect';
import { MainViews } from '../app.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'dream-stakes';
  currentMainView: number = MainViews.dashboard;
  rightPanal: boolean = false;
  _MainViews = MainViews;
  
  constructor(
	  private interconnect: Interconnect
  ) { }

  ngOnInit(): void {

		//--------------- Home UI Listeners --------------------//
		this.interconnect.createListener('home/changeView', (_connection, command) => {

			this.currentMainView = command.mainView;

      if(this.currentMainView === this._MainViews.dashboard)
        this.rightPanal = true;
      else
        this.rightPanal = false;
			
		})

  }

}
