import { Component, OnInit, Input } from '@angular/core';
import { FlightService } from "../flight.service";
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-flight-form',
  templateUrl: './new-flight-form.component.html',
  styleUrls: ['./new-flight-form.component.css']
})
export class NewFlightFormComponent implements OnInit {
  @Input() aname: string = "";  
  @Input() tnumb: string = "";
  @Input() tname: string = "";
  @Input() trip: string = "";
  @Input() category: string = "";

  public mode = 'Add'; //default mode
  private id: any; // ID
  private flight: any;

  //initialize the call using the function 
  constructor(private _myService: FlightService,
    private router: Router, public route: ActivatedRoute) { }



  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'Edit'; /*request had a parameter _id */
        this.id = paramMap.get('_id');

        //request flight info based on the id
        this._myService.getFlight(this.id).subscribe(
          data => {
            //read data and assign to private variable flight
            this.flight = data;
            //populate the parameters on the page
            //of note that this is done with the two-way bindings

            this.aname = this.flight.aname;            
            this.tnumb = this.flight.tnumb;
            this.tname = this.flight.tname;
            this.trip = this.flight.trip;            
            this.category = this.flight.category; 

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
    console.log("You submitted: " + this.aname + " " + this.tnumb + " " + this.tname + " " + this.trip + " " + this.category);

        
    if (this.mode == 'Add')
      this._myService.addFlights(this.aname, this.tnumb, this.tname, this.trip, this.category);
    if (this.mode == 'Edit')
      this._myService.updateFlight(this.id, this.aname, this.tnumb, this.tname, this.trip, this.category);
    this.router.navigate(['/listFlights']);
  }

}
