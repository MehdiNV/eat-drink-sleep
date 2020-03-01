import { Component, OnInit, Input } from '@angular/core';
import { SelectedLocation } from 'src/app/models/selectedLocationModel';

@Component({
  selector: 'app-selected-location',
  templateUrl: './selected-location.component.html',
  styleUrls: ['./selected-location.component.scss'],
})
export class SelectedLocationComponent implements OnInit {
  
  @Input()selectedLocation: SelectedLocation;

  constructor() { }

  ngOnInit() {}

}
