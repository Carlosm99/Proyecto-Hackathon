import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from "../servicios/auth.service";
import { NavController, IonSlides, ActionSheetController, IonSegment } from '@ionic/angular';
import { url } from 'inspector';
import {Router} from '@angular/router';



@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {



  slideOptions = {
    direction: 'vertical',
  };
  selectedSlide: any;
  segment =0;
  segmen =0;

  sliderOptions ={
   initialSlide: 0,
   slidesPerview: 1,
   speed: 400
  }
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute,
    public authservice : AuthService,
    private navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    private route:Router) { }

  Onlogout(){
      this.authservice.logout();
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
  }
  async segmentChanged(ev){
    await this.selectedSlide.slideTo(this.segment);
    }
   async slideShanged(slides : IonSlides){
   this.selectedSlide = slides;
   slides.getActiveIndex().then(selectedIndex =>{
     this.segment = selectedIndex;
   })
   }

   slideOpt ={
    direction: 'vertical'
  };

   async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      
      header: 'Seleccione tipo reporte ',
      cssClass: 'my-custom-class',
      mode: 'ios',
      buttons: [{
        text: 'Fugas en predio o calle',        
        role: '',      
        icon: '',
        handler: () => {                
          this.route.navigate(['/','fotoshome']);
        }
      }, {
        text: 'Medidores rotos o perdidos',
        icon: '',        
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Tomas clandestinas',
        icon: '',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Quejas y denuncias',
        icon: '',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Falta de suministro de agua',
        icon: '',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Inconformidades',
        icon: '',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cambio de giro ',
        icon: '',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
}
}
