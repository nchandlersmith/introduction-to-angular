import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HousingLocation} from "../housing-location";

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() housingLocationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    if (searchText === '') {
      this.results = this.housingLocationList;
      return;
    }

    this.results = this.housingLocationList
      .filter(housingLocation =>
        housingLocation.city
          .toLowerCase()
          .includes(searchText.toLowerCase()));
  }

  selectHousingLocation(housingLocation: HousingLocation) {
    this.locationSelectedEvent.emit(housingLocation);
  }
}
