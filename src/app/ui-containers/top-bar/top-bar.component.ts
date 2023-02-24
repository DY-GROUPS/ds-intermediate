import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IMessageStream, Interconnect } from 'ng-interconnect';
import { MainViews } from 'src/app/app.types';
import { IUser } from 'src/app/ds-components/ds-types';
import { ProfileService  } from '../../profile.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

    @ViewChild('notificationPopup') notificationPopup: ElementRef;
    @ViewChild('TabView') TabView: ElementRef;

    private changeView: IMessageStream | Promise<IMessageStream>;
    _MainViews = MainViews;

    selectedIndex;

    currentUser: IUser;

    constructor(
        private interconnect: Interconnect,
        public profileservice: ProfileService
    ) {

        this.changeView = interconnect.connectToListener('leftbar/changeView', 'topbar');
        if (this.changeView['then']) {
            this.changeView['then']((notifier) => this.changeView = notifier);
        }


        this.currentUser = profileservice.getUser();

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

    onChange($event) {

        this.selectedIndex = $event.index;

    }



}
