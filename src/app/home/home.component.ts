import { Component, OnInit } from '@angular/core';
import { Interconnect } from 'ng-interconnect';
import { MainViews } from '../app.types';
import { settingPopupScreen } from '../ds-components/ds-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'dream-stakes';
  currentMainView: number = MainViews.enterScreen;
  rightPanal: boolean = false;
  _MainViews = MainViews;
  showSettingsDialog: boolean = false;
  popupScreen = settingPopupScreen.addNewCard;
  showCaption = 'hidden';
  
  
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
			
		});

    this.interconnect.createListener('home/changeSettingPopup', (_connection, command) => {

			this.popupScreen = command.view;
      this.showCaption = command.caption;
      this.showSettingsDialog = true;
			
		})

  }

  closeDialog(){
    this.showSettingsDialog = false;
    this.showCaption = 'hidden';
  }

}
