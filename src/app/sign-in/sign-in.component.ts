import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

declare var google: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, AfterViewInit {

    @ViewChild('pwd') pwd: ElementRef;
    @ViewChild('email') email: ElementRef;
    @ViewChild('icon') icon: ElementRef;

    year;
    userEmail : string = "example@gmail.com";
    userPassword : string ='123';

    // user: SocialUser;
    loggedIn: boolean;

    googleLoginOptions = {
        scope: 'profile email'
    }



  
    constructor(

        public authService: AuthService,
        public router: Router

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

    ngAfterViewInit(){

        google.accounts.id.initialize({
            client_id: "42499149520-0f60ebohbh0tb3cp0gc4ss673b8f5spr.apps.googleusercontent.com",
            callback: (response: any) => this.handleGoogleSignIn(response)
          });
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { size: "large", type: "icon", shape: "pill" }  // customization attributes
        );

    }

    handleGoogleSignIn(response: any) {
        console.log(response.credential);
    
        // This next is for decoding the idToken to an object if you want to see the details.
        let base64Url = response.credential.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        console.log(JSON.parse(jsonPayload));
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

    // loginWithGoogle(): void {
        
    //     this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID, this.googleLoginOptions).then((user: SocialUser) => {
    //       console.log(user);
    //       this.authService.isValidaded = true
    //     });

    // }

}
