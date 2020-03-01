import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { SelectedLocationsService } from '../../services/selected-locations.service';
@Component({
  selector: 'app-select-location-modal',
  templateUrl: './select-location-modal.page.html',
  styleUrls: ['./select-location-modal.page.scss'],
})
export class SelectLocationModalPage implements OnInit {

  category: string;
  currentPos;
  final_results;

  constructor(public modalController: ModalController,
    public selectedLocationsService: SelectedLocationsService) { }
  
  ngOnInit() {
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
            console.log(currentPos.lat);
            map.setCenter(currentPos);
            resolve(currentPos);
          }, function() {
            //there was an error
          });
    });
     returnedPromise.then(currentPos => {
      this.getPlaces(currentPos, 100, "see", map);
      
     })

    }
  }

  getPlaces(latLong, radius, category, map) {
      	// Create the places service.
 
      var service = new google.maps.places.PlacesService(map);

      var filterTags = []
      switch(category){
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
​

      // Perform a nearby search.
      this.final_results = [];
      var promRes = new Promise((resolve, reject) => {
        service.nearbySearch(
          {location: latLong, radius: radius}, function(results, status, pagination){

            // Get all the locations matching the filter tags and put them in finalResults
            var finalResults = [];

            for (var i = 0; i < results.length; i++) {
              for (var j = 0; j < filterTags.length; j++) {
                if (results[i].types.includes(filterTags[j])) {
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
        console.log(finalResults);
        this.final_results = finalResults;
      });
  }



  closeModal(){
    this.modalController.dismiss();
  }
}
