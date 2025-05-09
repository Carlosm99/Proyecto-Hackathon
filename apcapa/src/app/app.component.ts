import { Component, OnInit } from '@angular/core';
//import { AuthService } from "../servicios/auth.service";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/folder/Inbox',
      icon: 'home'
    },
    {
      title: 'Enviar comentarios',
      url: '/comentarios',
      icon: 'reader'
    },
    {
      title: 'Transparencia',
      url: '/folder/Outbox',
      icon: 'swap-horizontal'
    },
    {
      title: 'Trámites y servicios',
      url: '/folder/Favorites',
      icon: 'folder'
    },
    {
      title: 'Consejeros ciudadanos',
      url: '/folder/Archived',
      icon: 'crop'
    },
    {
      title: 'Conócenos',
      url: '/folder/Trash',
      icon: 'information-circle'
    }
  ];
  public labels = ['Contactos', 'Notificaciones'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private AFauth : AngularFireAuth, 
    private router : Router
    //public authservice : AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 
  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  logout(){
    this.AFauth.signOut().then(() =>{
      this.router.navigate(['/login']);
    })
  }
 
}
