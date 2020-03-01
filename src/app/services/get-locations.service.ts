import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLocationsService {

  constructor() { }

  getPlaces(map, latLong, radius, category, filterTags) {
    // Create the places service.
    var service = new google.maps.places.PlacesService(map);
    var getNextPage = null;
    var moreButton = document.getElementById('more');
    moreButton.onclick = function() {
      moreButton.setAttribute('disabled', 'true');
      if (getNextPage) getNextPage();
    };

    var finalResults = [];

    // Perform a nearby search.
    service.nearbySearch(
        {location: latLong, radius: radius, type: category},
        function(results, status, pagination) {

          if (status !== 'OK' || filterTags.length == 0) {
            //createMarkers(results);
            console.log(results);
            return results;
          }
          
          // Get all the locations matching the filter tags and put them in finalResults
          finalResults = [];
          var placesList = document.getElementById('places');
          var pushLocation = false;
        
          for (var i = 0; i < results.length; i++) {
            for (var j = 0; j < filterTags.length; j++) {
              if (!results[i].types.includes(filterTags[j])) {
                pushLocation = false;
                break;
              }
              pushLocation = true;
            }
            
            if (pushLocation) {
              finalResults.push(results[i]);
            }
          }
          console.log("FINAL");
          console.log(finalResults);

          //createMarkers(finalResults);
          var check = !pagination.hasNextPage;
          moreButton.setAttribute('disabled', check.toString());
          getNextPage = pagination.hasNextPage && function() {
            pagination.nextPage();
          };
        });
     return finalResults;
  }
}
