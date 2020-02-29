import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { SelectLocationModalPage } from '../select-location-modal/select-location-modal.page';

@Component({
  selector: 'app-eat-drink-see-toolbar',
  templateUrl: './eat-drink-see-toolbar.component.html',
  styleUrls: ['./eat-drink-see-toolbar.component.scss'],
})
export class EatDrinkSeeToolbarComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async openSelectLocationModal(category){
      const modal = await this.modalController.create({
        component: SelectLocationModalPage,
        componentProps: {
          'category': category
        }
      });
    
      return await modal.present();
    }
}
