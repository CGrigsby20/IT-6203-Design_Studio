import { Component, OnInit, Input } from '@angular/core';
import { HotelbookingService } from "../hotelbooking.service";
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-hotelbooking-form',
  templateUrl: './new-hotelbooking-form.component.html',
  styleUrls: ['./new-hotelbooking-form.component.css']
})
export class NewHotelbookingFormComponent implements OnInit {
  @Input() name: string = "";  
  @Input() indate: string = "";
  @Input() outdate: string = "";
  @Input() rooms: string = "";
  @Input() street: string = "";
  @Input() zipcode: string = "";
  @Input() city: string = "";
  @Input() state: string = "";

  public mode = 'Add'; //default mode
  private id: any; // ID
  private hotelbooking: any;

  //initialize the call using the function 
  constructor(private _myService: HotelbookingService,
    private router: Router, public route: ActivatedRoute) { }



  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'Edit'; /*request had a parameter _id */
        this.id = paramMap.get('_id');

        //request hotelbooking info based on the id
        this._myService.getHotelbooking(this.id).subscribe(
          data => {
            //read data and assign to private variable hotelbooking
            this.hotelbooking = data;
            //populate the parameters on the page
            //of note that this is done with the two-way bindings

            this.name = this.hotelbooking.name;            
            this.indate = this.hotelbooking.indate;
            this.outdate = this.hotelbooking.outdate;
            this.rooms = this.hotelbooking.rooms;            
            this.street = this.hotelbooking.street;
            this.zipcode = this.hotelbooking.zipcode;
            this.city = this.hotelbooking.city;
            this.state = this.hotelbooking.state; 

          },
          err => console.error(err),
          () => console.log('finished loading')
        );
      }
      else {
        this.mode = 'Add';
        this.id = null;
      }
    });
  }


  onSubmit() {
    console.log("You submitted: " + this.name + " " + this.indate + " " + this.outdate + " " + this.rooms
      + " " + this.street + " " + this.zipcode + " " + this.city + " " + this.state);

        
    if (this.mode == 'Add')
      this._myService.addHotelbookings(this.name, this.indate, this.outdate, this.rooms, this.street, this.zipcode, this.city, this.state);
    if (this.mode == 'Edit')
      this._myService.updateHotelbooking(this.id, this.name, this.indate, this.outdate, this.rooms, this.street, this.zipcode, this.city, this.state);
    this.router.navigate(['/listHotelbookings']);
  }

}
