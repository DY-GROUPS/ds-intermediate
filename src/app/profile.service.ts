import { Injectable } from '@angular/core';
import { IUser } from './ds-components/ds-types';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

	public currentUser: IUser;

    constructor() { }

    setUser (userDetails :IUser): void {

		this.currentUser = {
			displayName: userDetails.displayName,
			email: userDetails.email,
			fullName: userDetails.fullName,
			profileImage: userDetails.profileImage
		}
        
    }

    getUser(): IUser{
        return this.currentUser;
    }
    

}