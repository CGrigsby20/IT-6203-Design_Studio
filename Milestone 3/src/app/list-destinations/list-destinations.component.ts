import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-list-destinations',
  templateUrl: './list-destinations.component.html',
  styleUrls: ['./list-destinations.component.css']
})
export class ListDestinationsComponent implements OnInit {

  //declare variable to hold response and make it public to be accessible from components.html
  public destinations: any;
  //initialize the call using the function
  constructor(private _myService: DestinationService) { }
  ngOnInit() {
      this.getDestinations();
  }
  //method called OnInit
  getDestinations() {
      this._myService.getDestinations().subscribe(
          //read data and assign to public variable 
          data => { this.destinations = data},
          err => console.error(err),
          () => console.log('finished loading')
      );
  }

  onDelete(destinationId: string) {
    this._myService.deleteDestination(destinationId);
   }

}
