import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
 
  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  email: string;
  password: string;

  constructor(private AuthService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  onSubmitlogin()
  {
    this.AuthService.login(this.email, this.password).then( res =>{
      this.router.navigate(['/folder/Inbox']);
    }).catch(err => alert('contraseña o correo error'))
  }


  
  }

  

