import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from "../servicios/auth.service";
import { NavController, LoadingController, IonSlides, ActionSheetController, AlertController, IonSegment } from '@ionic/angular';
import { url } from 'inspector';
import {Router} from '@angular/router';
import { type } from 'os';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  scrollToTop() {
    this.content.scrollToTop();
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    }, 500);
  }

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
    private route:Router,
    public alertController: AlertController,
    public loadingController: LoadingController) { }

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
    direction: 'horizontal'
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
          this.presentLoading();
        }
        
      }, {
        text: 'Medidores rotos o perdidos',
        icon: '',        
        handler: () => {
          this.presentLoading();
          console.log('Share clicked');
        }
      }, {
        text: 'Tomas clandestinas',
        icon: '',
        handler: () => {
          this.presentLoading();
          console.log('Play clicked');
        }
      }, {
        text: 'Quejas y denuncias',
        icon: '',
        handler: () => {
          this.presentLoading();
          console.log('Favorite clicked');
        }
      }, {
        text: 'Falta de suministro de agua',
        icon: '',
        handler: () => {
          this.presentLoading();
          console.log('Favorite clicked');
        }
      }, {
        text: 'Inconformidades',
        icon: '',
        handler: () => {
          this.presentLoading();
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cambio de giro ',
        icon: '',
        handler: () => {
          this.presentLoading();
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

async presentAlertPrompt() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Prompt!',
    inputs: [
      {
        name: 'Octubre',
        id: 'card1'      
     
      },      
      {
        name: 'name2',
        type: 'text',
        id: 'name2-id',
        value: 'hello',
        placeholder: 'Placeholder 2'
      },
      // multiline input.
      {
        name: 'paragraph',
        id: 'paragraph',
        type: 'textarea',
        placeholder: 'Placeholder 3'
      },
      {
        name: 'name3',
        value: 'http://ionicframework.com',
        type: 'url',
        placeholder: 'Favorite site ever'
      },
      // input date with min & max
      {
        name: 'name4',
        type: 'date',
        min: '2017-03-01',
        max: '2018-01-12'
      },
      // input date without min nor max
      {
        name: 'name5',
        type: 'date'
      },
      {
        name: 'name6',
        type: 'number',
        min: -5,
        max: 10
      },
      {
        name: 'name7',
        type: 'number'
      },
      {
        name: 'name8',
        type: 'password',
        placeholder: 'Advanced Attributes',
        cssClass: 'specialClass',
        attributes: {
          maxlength: 4,
          inputmode: 'decimal'
        }
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        }
      }
    ]
  });

  await alert.present();
}

async presentLoading() {
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Cargando',
    mode:'ios',
    duration: 2000
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();
  console.log('Cargando');
}

}
