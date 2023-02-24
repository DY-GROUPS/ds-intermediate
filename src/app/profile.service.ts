import { Injectable } from '@angular/core';
import { IUser } from './ds-components/ds-types';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    userEmail;
    userDisplayName;
    userFulname;
    userProfilePicture;

    constructor() { }

    setUser (userDetails :IUser) {

        this.userEmail = userDetails.email;
        this.userDisplayName = userDetails.given_name;
        this.userFulname = userDetails.name;
        this.userProfilePicture = userDetails.picture;

        console.log(userDetails);
        
    }

    // getUser (){

    //     var email = this.userEmail;
    //     var name = this.userName;
    //     var Fullname = this.userFulname ;
    //     var picture = this.userProfilePicture;
        
    // }
    

}