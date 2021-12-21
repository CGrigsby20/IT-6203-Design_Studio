import { Component, OnInit } from '@angular/core';
import { CarrentalService } from '../carrental.service';

@Component({
  selector: 'app-list-carrentals',
  templateUrl: './list-carrentals.component.html',
  styleUrls: ['./list-carrentals.component.css']
})
export class ListCarrentalsComponent implements OnInit {

  //declare variable to hold response and make it public to be accessible from components.html
  public carrentals: any;
  //initialize the call using the function
  constructor(private _myService: CarrentalService) { }
  ngOnInit() {
      this.getCarrentals();
  }
  //method called OnInit
  getCarrentals() {
      this._myService.getCarrentals().subscribe(
          //read data and assign to public variable 
          data => { this.carrentals = data},
          err => console.error(err),
          () => console.log('finished loading')
      );
  }

  onDelete(carrentalId: string) {
    this._myService.deleteCarrental(carrentalId);
  }

}
