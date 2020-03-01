import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectLocationModalPageRoutingModule } from './select-location-modal-routing.module';

import { SelectLocationModalPage } from './select-location-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectLocationModalPageRoutingModule
  ],
  declarations: [SelectLocationModalPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectLocationModalPageModule {}
