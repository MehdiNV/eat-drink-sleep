import { Injectable } from '@angular/core';
import { SelectedLocation } from '../models/selectedLocationModel';
@Injectable({
  providedIn: 'root'
})
export class SelectedLocationsService {
  selectedLocations: SelectedLocation[] = [];
  constructor() {
    // THIS IS FAKE DATA

   }
}
