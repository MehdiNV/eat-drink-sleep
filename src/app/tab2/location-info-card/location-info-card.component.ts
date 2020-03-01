import { Component, OnInit, Input } from '@angular/core';
import { SelectedLocation } from 'src/app/models/selectedLocationModel';

@Component({
  selector: 'app-location-info-card',
  templateUrl: './location-info-card.component.html',
  styleUrls: ['./location-info-card.component.scss'],
})
export class LocationInfoCardComponent implements OnInit {
  
  @Input()location: SelectedLocation;

  constructor() { }

  ngOnInit() {
    // console.log(this.location);
  }

}
