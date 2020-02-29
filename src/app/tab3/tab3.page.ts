import { Component, AfterViewInit, ViewChild, ElementRef } from 
  '@angular/core';
  
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewInit {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;;
  lat = 40.730610;
  lng = -73.935242;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map =  new google.maps.Map(document.getElementById('map'), {
      center: {lat: this.lat, lng: this.lng},
      zoom: 6
    });

    this.marker.setMap(this.map);
   }

  constructor() {
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
