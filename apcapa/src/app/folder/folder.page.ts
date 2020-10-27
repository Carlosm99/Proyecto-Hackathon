import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from "../servicios/auth.service";
import { NavController, IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
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
    private navCtrl: NavController) { }

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
}
