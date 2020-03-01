import { Component, OnInit } from '@angular/core';
import { WalkingPositionService } from '../../services/walking-position.service';
@Component({
  selector: 'app-walking-distance',
  templateUrl: './walking-distance.component.html',
  styleUrls: ['./walking-distance.component.scss'],
})
export class WalkingDistanceComponent implements OnInit {

  constructor(public walkingDistanceService: WalkingPositionService) { }

  ngOnInit() {
   
  }

}
