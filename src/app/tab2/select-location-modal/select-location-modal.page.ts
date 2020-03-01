import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';

@Component({
  selector: 'app-select-location-modal',
  templateUrl: './select-location-modal.page.html',
  styleUrls: ['./select-location-modal.page.scss'],
})
export class SelectLocationModalPage implements OnInit {

  category: string;

  constructor(public modalController: ModalController) { }
  
  ngOnInit() {
    
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
