import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    @ViewChild('pwd') pwd: ElementRef;
    @ViewChild('email') email: ElementRef;
    @ViewChild('icon') icon: ElementRef;

    year;
    userEmail : string = "example@gmail.com";
    userPassword : string ='123';

    user: SocialUser;
    loggedIn: boolean;



  
    constructor(

        public authService: AuthService,
        public router: Router,
        private socialAuthService: SocialAuthService

    ) { }

    ngOnInit(): void {

        this.year =  new Date().getFullYear;

        // this.user.email = "example@gmail.com";
        // // this.user.password =this.userPassword;

        // this.socialAuthService.authState.subscribe((user) => {
        //     this.user = user;
        //     this.loggedIn = (user != null);

        //   console.log(this.user.email)
        // });
        
    }

    login(){

        const email = this.email.nativeElement.value;
        const password = this.pwd.nativeElement.value;


        if ( this.userEmail == email && this.userPassword == password ){

            this.authService.isValidaded = true;

        }

        else{

            alert("error");

        }

    }

    showPassword(){


        const password = this.pwd.nativeElement;
        const eyeIcon = this.icon.nativeElement;

        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        eyeIcon.classList.toggle("pi-eye");
            
    }

    loginWithGoogle(): void {
        
        this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
          console.log(user);
          this.authService.isValidaded = true
        });

    }

}
