import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../servicios/auth.service";
import {
  NavController,
  LoadingController,
  IonSlides,
  ActionSheetController,
  AlertController,
  IonSegment,
} from "@ionic/angular";
import { url } from "inspector";
import { Router } from "@angular/router";
import { type } from "os";
import { IonContent } from "@ionic/angular";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
})
export class FolderPage implements OnInit {
  list_original = ["item 1", "item 2", "item 3", "item 4"];
  list_to_show = this.list_original;
  selected_index = -1;
  show_list = true;

  moverenapp() {
    this.route.navigate(["/", "pagoonline"]);
  }
  onCancel(val) {
    this.show_list = false;
  }

  click_bar() {
    this.show_list = true;
  }

  click_item(val) {
    for (let i = 0; i < this.list_original.length; i++) {
      if (
        this.list_to_show[val].toUpperCase() ===
        this.list_original[i].toUpperCase()
      ) {
        this.selected_index = i;
        break;
      }
    }
    this.show_list = false;
  }

  change_query(query) {
    let k = 0;
    this.list_to_show = [];
    for (let i = 0; i < this.list_original.length; i++) {
      if (this.list_original[i].toUpperCase().includes(query.toUpperCase())) {
        this.list_to_show[k] = this.list_original[i];
        k += 1;
      }
    }
  }

  @ViewChild(IonContent) content: IonContent;

  scrollToTop() {
    this.content.scrollToTop();
  }
  loadData(event) {
    setTimeout(() => {
      console.log("Done");
      event.target.complete();
    }, 500);
  }

  slideOptions = {
    direction: "vertical",
  };
  selectedSlide: any;
  segment = 0;
  segmen = 0;

  sliderOptions = {
    initialSlide: 0,
    slidesPerview: 1,
    speed: 400,
  };
  public folder: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public authservice: AuthService,
    private navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    private route: Router,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {}

  Onlogout() {
    this.authservice.logout();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");
  }

  buscar(event) {}
  async segmentChanged(ev) {
    await this.selectedSlide.slideTo(this.segment);
  }
  async slideShanged(slides: IonSlides) {
    this.selectedSlide = slides;
    slides.getActiveIndex().then((selectedIndex) => {
      this.segment = selectedIndex;
    });
  }

  slideOpt = {
    direction: "horizontal",
  };

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Seleccione tipo reporte ",
      cssClass: "my-custom-class",
      mode: "ios",
      buttons: [
        {
          text: "Fugas en predio o calle",
          role: "",
          icon: "",
          handler: () => {
            this.route.navigate(["/", "fotoshome"]);
            this.presentLoading();
          },
        },
        {
          text: "Medidores rotos o perdidos",
          icon: "",
          handler: () => {
            this.presentLoading();
            console.log("Share clicked");
          },
        },
        {
          text: "Tomas clandestinas",
          icon: "",
          handler: () => {
            this.presentLoading();
            console.log("Play clicked");
          },
        },
        {
          text: "Quejas y denuncias",
          icon: "",
          handler: () => {
            this.presentLoading();
            console.log("Favorite clicked");
          },
        },
        {
          text: "Falta de suministro de agua",
          icon: "",
          handler: () => {
            this.presentLoading();
            console.log("Favorite clicked");
          },
        },
        {
          text: "Inconformidades",
          icon: "",
          handler: () => {
            this.presentLoading();
            console.log("Favorite clicked");
          },
        },
        {
          text: "Cambio de giro ",
          icon: "",
          handler: () => {
            this.presentLoading();
            console.log("Favorite clicked");
          },
        },
        {
          text: "Cancelar",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }

 
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Cargando",
      mode: "ios",      
      duration: 500,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log("Cargando");
  }
}
