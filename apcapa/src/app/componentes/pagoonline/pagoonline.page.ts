import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagoonline',
  templateUrl: './pagoonline.page.html',
  styleUrls: ['./pagoonline.page.scss'],
})
export class PagoonlinePage implements OnInit {

  constructor(private route:Router,
    public alertController: AlertController) { }

  ngOnInit() {
  }
  moverenapp(){
  this.route.navigate(['/','']);
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ingrese los datos abajo',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Nombre completo(del titular)'
        },
        {
          name: 'name2',
          type: 'text',          
          placeholder: 'Número de tarjeta'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'text',
          placeholder: 'CVV Código de seguridad'
        },
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'text',
          placeholder: 'MM/AA Fecha de expiración'
        },
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'text',
          placeholder: 'DD/MM/AA Fecha de nacimiento'
        },
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'text',
          placeholder:'Teléfono del titular',
        },
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'text',
          placeholder:'(CURP/RFC/IFE/DNI/CI/CC)',
        },
        
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
           
          }
        }, {
          text: 'Agregar',
          handler: () => {
            
          }
        }
      ]
    });

    await alert.present();
  }
}
