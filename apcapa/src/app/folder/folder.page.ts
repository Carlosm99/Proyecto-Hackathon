import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from "../servicios/auth.service";
import { NavController, IonSlides, ActionSheetController } from '@ionic/angular';



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

  sliderOptions ={
   initialSlide: 0,
   slidesPerview: 1,
   speed: 400
  }
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute,
    public authservice : AuthService,
    private navCtrl: NavController,
    public actionSheetController: ActionSheetController) { }

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



   async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
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
