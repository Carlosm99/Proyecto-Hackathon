import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  passwordType: string = "password";
  passwordIcon: string = "eye-off";

  hideShowPassword() {
    this.passwordType = this.passwordType === "text" ? "password" : "text";
    this.passwordIcon = this.passwordIcon === "eye-off" ? "eye" : "eye-off";
  }

  email: string;
  password: string;

  constructor(
    private AuthService: AuthService,
    public router: Router,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {}
  onSubmitlogin() {
    this.presentLoading();
    this.AuthService.login(this.email, this.password)
      .then((res) => {
        this.router.navigate(["/folder/Inbox"]);
      })
      .catch((err) => alert("contraseña o correo error"));
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Comisión de Agua Potable y Alcantarillado",
      mode: "ios",
      duration: 5000,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }
}
