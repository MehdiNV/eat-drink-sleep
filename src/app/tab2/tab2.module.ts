import { IonicModule, } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { WalkingDistanceComponent } from './walking-distance/walking-distance.component';
import { EatDrinkSeeToolbarComponent } from './eat-drink-see-toolbar/eat-drink-see-toolbar.component';
import { SelectedLocationComponent } from './selected-location/selected-location.component';
// import { SelectLocationModalPage } from './select-location-modal/select-location-modal.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
  
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  exports: [

  ],
  declarations: [
    Tab2Page, 
    // SelectLocationModalPage,
    WalkingDistanceComponent, 
    EatDrinkSeeToolbarComponent,
    SelectedLocationComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Tab2PageModule {}
