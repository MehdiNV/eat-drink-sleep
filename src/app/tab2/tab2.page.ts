import { Component } from '@angular/core';
import { WalkingDistanceComponent } from './walking-distance/walking-distance.component';
import { SelectedLocationsService } from '../services/selected-locations.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public selectedLocationsService: SelectedLocationsService) {

  }

}
