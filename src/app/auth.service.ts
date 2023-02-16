import { Injectable } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';

@Injectable({
    
    providedIn: 'root'
})

export class AuthService {

    isValidaded;

    constructor() {}


    public isAuthenticated(): boolean {
        
        return this.isValidaded;
    
    }
}
