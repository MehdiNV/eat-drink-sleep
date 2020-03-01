import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { SelectedLocationsService } from '../../services/selected-locations.service';
import { LocationInfoCardComponent } from '../location-info-card/location-info-card.component';
import { SelectedLocation } from 'src/app/models/selectedLocationModel';

@Component({
  selector: 'app-select-location-modal',
  templateUrl: './select-location-modal.page.html',
  styleUrls: ['./select-location-modal.page.scss'],
})
export class SelectLocationModalPage implements OnInit {

  category: string;
  currentPos;
  final_results: SelectedLocation[] = [];

  constructor(public modalController: ModalController,
    public selectedLocationsService: SelectedLocationsService) { }
  
  ngOnInit() {
    // console.log(this.category);
    var selectedLocationOne: SelectedLocation = {
      name: 'Edinburgh Castle',
      priceRange: '£ - ££',
      distanceFromUser: '100',
      image: null,
      eatDrinkSeeCategory: 'eat',
      tag: 'restaurant',
      lat: 55.948625,
      lng: -3.199806,
      googleMapsLocationId: '1'
    }
    var selectedLocationTwo: SelectedLocation = {
      name: 'Edinburgh University',
      priceRange: '££ - £££',
      distanceFromUser: '300',
      image: null,
      eatDrinkSeeCategory: 'drink',
      tag: 'bar',
      lat: 55.944534,
      lng: -3.189477,
      googleMapsLocationId: '2'
    } 
    this.mapInitializer();
  }

  mapInitializer(){
    var map =  new google.maps.Map(document.getElementById('map'), {
      center: {lat: 0, lng: 0},
      zoom: 6
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
    var returnedPromise = new Promise((resolve, reject) => {
     navigator.geolocation.getCurrentPosition( function(position) {
            var currentPos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            // console.log(currentPos.lat);
            map.setCenter(currentPos);
            resolve(currentPos);
          }, function() {
            //there was an error
          });
    });
     returnedPromise.then(currentPos => {
       console.log(currentPos);
      //  console.log(this.getPlaces(currentPos, 500, this.category, map));
        this.getPlaces(currentPos, 500, this.category, map);
      
     })

    }
  }

 
  getPlaces(latLong, radius, category, map) {
      	// Create the places service.
 
      var service = new google.maps.places.PlacesService(map);

      var filterTags = []
     
    ​ switch(category){
      case "eat":
          filterTags = ["cafe", "restaurant"];
          break;
      case "drink":
          filterTags = ["bar", "nightclub"];
          break;
      case "see":
          filterTags = ["museum", "point_of_interest"];
          break;
    }

      // Perform a nearby search.
      var promRes = new Promise((resolve, reject) => {
        service.nearbySearch(
          {location: latLong, radius: radius}, function(results, status, pagination){
            console.log(results);
            // Get all the locations matching the filter tags and put them in finalResults
            var finalResults = [];

            for (var i = 0; i < results.length; i++) {
              for (var j = 0; j < filterTags.length; j++) {
                if (results[i].types.includes(filterTags[j])) {
                  console.log(results[i]);
                  finalResults.push(results[i]);
                  break;
                }
              }
            }
            // console.log(finalResults);
            resolve(finalResults);// finalResults;
          })
      });

      return promRes.then(finalResults => {
        var results: any = finalResults;

        results.forEach(element => {
          // console.log(element);
          this.final_results.push(this.getLocationFromResult(element));
        });
    
      });
  }

  getLocationFromResult(gMapsLocation): SelectedLocation{
    // console.log(gMapsLocation.geometry.location.lat());
    // console.log(gMapsLocation.geometry.location.lng());
    var eatDrinkSeeCategory = this.getEatDrinkSeeType(gMapsLocation);
    var location: SelectedLocation = {
      name: gMapsLocation.name,
      image: gMapsLocation.icon,
      eatDrinkSeeCategory: eatDrinkSeeCategory,
      priceRange: '£-££',
      tag: null,
      distanceFromUser: '1000',
      googleMapsLocationId: gMapsLocation.id,
      lat: gMapsLocation.geometry.location.lat(),
      lng: gMapsLocation.geometry.location.lng(),
    };
    return location;
  }

  isInList(googleMapsLocationId: string){
    // console.log(googleMapsLocationId);
    this.selectedLocationsService.selectedLocations.forEach(loc => {
      if (loc.googleMapsLocationId == googleMapsLocationId){
        return true;
      }
    });
  }

  getEatDrinkSeeType(gMapsLocation){
    if(this.isSeeType(gMapsLocation)){
      return 'see';
    }else if(this.isDrinkType(gMapsLocation)){
      return 'drink'
    }else if(this.isEatType(gMapsLocation)){
      return 'eat';
    }
  }

  isSeeType(mapLocation): boolean{
    return(mapLocation.types.includes("museum", "point_of_interest"));
  }

  isEatType(mapLocation): boolean{
    return(mapLocation.types.includes("food", "cafe", "restaurant"));
  }
  isDrinkType(mapLocation): boolean{
    return(mapLocation.types.includes("bar", "nightclub"));
  }
  
  removeFromSelectedLocations(location: SelectedLocation){
    var index = this.selectedLocationsService.selectedLocations.indexOf(location);
    this.selectedLocationsService.selectedLocations.splice(index, 1);
  }
  addToSelectedLocations(location: SelectedLocation){
    // console.log(location);
    this.selectedLocationsService.selectedLocations.push(location);
  }
  closeModal(){
    this.modalController.dismiss();
  }
}
