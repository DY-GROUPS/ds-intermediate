import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  @ViewChild('pwd') pwd: ElementRef;
  @ViewChild('icon') icon: ElementRef;

  
  

  constructor() { }

  ngOnInit(): void {
  }

  
  showPassword(){

    
    const password = this.pwd.nativeElement;
    const eyeIcon = this.icon.nativeElement;

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    eyeIcon.classList.toggle("pi-eye");
          
  }

}
