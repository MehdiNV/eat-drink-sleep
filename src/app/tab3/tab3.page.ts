import { Component, AfterViewInit, ViewChild, ElementRef } from 
  '@angular/core';
import { SelectedLocationsService } from '../services/selected-locations.service';
import {  Router   } from '@angular/router'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewInit {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;
  currentLat;
  currentLong;
  marker;

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map =  new google.maps.Map(document.getElementById('map'), {
      center: {lat: 55.942719, lng: -3.188020},
      zoom: 6
    });

    var directionsService = new google.maps.DirectionsService;
    var directionsRenderer = new google.maps.DirectionsRenderer({
      draggable: false,
      map: this.map
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
     new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        resolve(pos);
      }, function() {
        //there was an error
      });
     }).then(returnedPos => {
       var pos: any = returnedPos;

       this.currentLat = pos.lat;
       this.currentLong = pos.lng;
       this.map.setCenter(pos);

      var locations: any[] = [];
      var i = 0;
        
      this.selectedLocationsService.selectedLocations.forEach(location => {
        locations[i] = {
          'lat': location.lat,
          'lng': location.lng
        }
        i++;
      })  


    
      this.displayRoute(
        locations , directionsService, directionsRenderer);
      })
    }
  }

  refresh(){
    // window.location.reload();
    this.router.navigate(['/tabs/tab2']);
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
  }

  displayRoute(destinations, service, display){
    // console.log(destinations);
    for (var i = 1; i < destinations.length-1; i++) {
      destinations[i] = {location: destinations[i]};
    }
    // console.log(destinations);
    service.route({
      origin: destinations[0],
      destination: destinations[destinations.length-1],
      waypoints: destinations.slice(1,-1),
      travelMode: 'WALKING',
      avoidTolls: true
    }, function(response, status) {
      if (status === 'OK') {
        display.setDirections(response);
      } else {
        alert('Could not display directions due to: ' + status);
      }
    });
  }

  constructor(public selectedLocationsService: SelectedLocationsService, public router: Router) {
    
    // this.initMap();
  }

  // initMap() {
    // this.map = new google.maps.Map(document.getElementById('map'), {
    //   center: {lat: -34.397, lng: 150.644},
    //   zoom: 6
    // });
  //   this.infoWindow = new google.maps.InfoWindow;
  //   // Try HTML5 geolocation.
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       var pos = {
  //         lat: position.coords.latitude,
  //         lng: position.coords.longitude
  //       };
  //       this.infoWindow.setPosition(pos);
  //       this.infoWindow.setContent('Location found.');
  //       this.infoWindow.open(this.map);
  //       this.map.setCenter(pos);
  //     }, function() {
  //       this.handleLocationError(true, this.infoWindow, this.map.getCenter());
  //     });
  //   } else {
  //     // Browser doesn't support Geolocation
  //     this.handleLocationError(false, this.infoWindow, this.map.getCenter());
  //   }
  // }
  // handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //   infoWindow.setPosition(pos);
  //   infoWindow.setContent(browserHasGeolocation ?
  //                         'Error: The Geolocation service failed.' :
  //                         'Error: Your browser doesn\'t support geolocation.');
  //   infoWindow.open(this.map);
  // }
}
