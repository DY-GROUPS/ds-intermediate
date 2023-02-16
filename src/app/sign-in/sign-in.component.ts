import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  
  constructor(

    public authService: AuthService,
  ) { }

  ngOnInit(): void {

    this.year =  new Date().getFullYear();
  }

  login(){
    
    const email = this.email.nativeElement.value;
    const password = this.pwd.nativeElement.value;


    if(this.userEmail == email && this.userPassword == password){

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

}
