import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-list-flights',
  templateUrl: './list-flights.component.html',
  styleUrls: ['./list-flights.component.css']
})
export class ListFlightsComponent implements OnInit {

  //declare variable to hold response and make it public to be accessible from components.html
  public flights: any;
  //initialize the call using the function
  constructor(private _myService: FlightService) { }
  ngOnInit() {
      this.getFlights();
  }
  //method called OnInit
  getFlights() {
      this._myService.getFlights().subscribe(
          //read data and assign to public variable 
          data => { this.flights = data},
          err => console.error(err),
          () => console.log('finished loading')
      );
  }

  onDelete(flightId: string) {
    this._myService.deleteFlight(flightId);
   }

}
