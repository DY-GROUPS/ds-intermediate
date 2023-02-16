import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @ViewChild('pwd') pwd: ElementRef;
  @ViewChild('icon') icon: ElementRef;

  year;
  

  constructor() { }

  ngOnInit(): void {

    this.year =  new Date().getFullYear();
  }

  
  showPassword(){

    
    const password = this.pwd.nativeElement;
    const eyeIcon = this.icon.nativeElement;

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    eyeIcon.classList.toggle("pi-eye");
          
  }

}
