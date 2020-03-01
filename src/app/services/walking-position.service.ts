import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalkingPositionService {

  walkingPositionRange: number = 50;
  constructor() { }
}
