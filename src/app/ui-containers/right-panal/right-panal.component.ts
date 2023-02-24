import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/ds-components/ds-types';
import { ProfileService } from 'src/app/profile.service';

@Component({
  selector: 'app-right-panal',
  templateUrl: './right-panal.component.html',
  styleUrls: ['./right-panal.component.scss']
})
export class RightPanalComponent implements OnInit {

  currentUser: IUser;

  constructor(private profileService: ProfileService) { 

    this.currentUser = profileService.getUser();
    
  }

  ngOnInit(): void {
  }

}
