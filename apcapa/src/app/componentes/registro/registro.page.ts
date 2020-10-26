import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  public email : string;
  public password : string;
  public name : string;
  public contract : string;
  public telfon : string;
  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
  }
  OnSubmitRegister(){
    this.auth.register(this.email, this.password, this.name, this.telfon, this.contract).then( auth => {
      this.router.navigate(['/preference'])
      console.log(auth)
    }).catch(err => console.log(err))
   }
}
