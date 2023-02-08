import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IMessageStream, Interconnect } from 'ng-interconnect';
import { MainViews } from 'src/app/app.types';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @ViewChild('notificationPopup') notificationPopup: ElementRef;

  private changeView: IMessageStream | Promise<IMessageStream>;
  _MainViews = MainViews;

  constructor(private interconnect: Interconnect) {

    this.changeView = interconnect.connectToListener('leftbar/changeView', 'topbar');
    if (this.changeView['then']) {
      this.changeView['then']((notifier) => this.changeView = notifier);
    }

  }

  ngOnInit(): void {
  }

  userChangeView(viewId, showBackground: boolean, showCards: boolean){

    (this.changeView as IMessageStream).emit({viewId, showBackground, showCards});


  }

  showNotification(){
    
    var content = this.notificationPopup.nativeElement;

    if (content.style.display === "block") {

      content.style.display = "none";

    } 

    else {
      content.style.display = "block";
      
    }
  
  }

}
