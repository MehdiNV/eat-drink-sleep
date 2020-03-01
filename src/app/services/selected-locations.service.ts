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
      name: 'Edinburgh Castle',
      priceRange: '£ - ££',
      distanceFromUser: '100',
      image: null,
      eatDrinkSeeCategory: 'eat',
      tag: 'restaurant',
      lat: 55.948625,
      long: -3.199806
    }
    var selectedLocationTwo: SelectedLocation = {
      name: 'Edinburgh University',
      priceRange: '££ - £££',
      distanceFromUser: '300',
      image: null,
      eatDrinkSeeCategory: 'drink',
      tag: 'bar',
      lat: 55.944534,
      long: -3.189477
    }
    // var selectedLocationThree: SelectedLocation = {
    //   name: 'Location Three Name',
    //   priceRange: '£ - £',
    //   distanceFromUser: '500',
    //   image: null,
    //   eatDrinkSeeCategory: 'drink',
    //   tag: 'bar',
    //   lat: 55.9486,
    //   long: 3.1999
    // }
    this.selectedLocations.push(selectedLocationOne);
    this.selectedLocations.push(selectedLocationTwo);
    // this.selectedLocations.push(selectedLocationThree);
   }
}
