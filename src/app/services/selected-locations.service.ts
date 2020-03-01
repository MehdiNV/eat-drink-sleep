import { Injectable } from '@angular/core';
import { SelectedLocation } from '../models/selectedLocationModel';
@Injectable({
  providedIn: 'root'
})
export class SelectedLocationsService {
  selectedLocations: SelectedLocation[] = [];
  constructor() {
    // THIS IS FAKE DATA
    var selectedLocationOne: SelectedLocation = {
      name: 'Location One Name',
      priceRange: '£ - ££',
      distanceFromUser: '100',
      image: null,
      eatDrinkSeeCategory: 'eat',
      tag: 'restaurant'
    }
    var selectedLocationTwo: SelectedLocation = {
      name: 'Location Two Name',
      priceRange: '££ - £££',
      distanceFromUser: '300',
      image: null,
      eatDrinkSeeCategory: 'drink',
      tag: 'bar'
    }
    
    this.selectedLocations.push(selectedLocationOne);
    this.selectedLocations.push(selectedLocationTwo);
   }
}
