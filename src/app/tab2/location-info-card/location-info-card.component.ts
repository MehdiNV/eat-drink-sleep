import { Component, OnInit, Input } from '@angular/core';
import { SelectedLocation } from 'src/app/models/selectedLocationModel';
import { SelectedLocationsService } from '../../services/selected-locations.service';
@Component({
  selector: 'app-location-info-card',
  templateUrl: './location-info-card.component.html',
  styleUrls: ['./location-info-card.component.scss'],
})
export class LocationInfoCardComponent implements OnInit {
  
  @Input()location: SelectedLocation;

  constructor(public selectedLocationsService: SelectedLocationsService) { }

  ngOnInit() {
    // console.log(this.location);
  }

  removeLocation(location){
    console.log(location);
    if(this.selectedLocationsService.selectedLocations.includes(location)){
      var index = this.selectedLocationsService.selectedLocations.indexOf(location);
      this.selectedLocationsService.selectedLocations.splice(index,1);
    }
  }
}
