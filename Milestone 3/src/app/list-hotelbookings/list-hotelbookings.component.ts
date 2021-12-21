import { Component, OnInit } from '@angular/core';
import { HotelbookingService } from '../hotelbooking.service';

@Component({
  selector: 'app-list-hotelbookings',
  templateUrl: './list-hotelbookings.component.html',
  styleUrls: ['./list-hotelbookings.component.css']
})
export class ListHotelbookingsComponent implements OnInit {

  //declare variable to hold response and make it public to be accessible from components.html
  public hotelbookings: any;
  //initialize the call using the function
  constructor(private _myService: HotelbookingService) { }
  ngOnInit() {
      this.getHotelbookings();
  }
  //method called OnInit
  getHotelbookings() {
      this._myService.getHotelbookings().subscribe(
          //read data and assign to public variable 
          data => { this.hotelbookings = data},
          err => console.error(err),
          () => console.log('finished loading')
      );
  }

  onDelete(hotelbookingId: string) {
    this._myService.deleteHotelbooking(hotelbookingId);
   }

}
