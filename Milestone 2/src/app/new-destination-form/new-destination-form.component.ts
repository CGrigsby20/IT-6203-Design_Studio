import { Component, OnInit, Input } from '@angular/core';
import { DestinationService } from "../destination.service";
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-destination-form',
  templateUrl: './new-destination-form.component.html',
  styleUrls: ['./new-destination-form.component.css']
})
export class NewDestinationFormComponent implements OnInit {
  @Input() intdom: string = "";  
  @Input() country: string = "";
  @Input() dstate: string = "";
  @Input() dcity: string = "";
  @Input() tdate: string = "";
  @Input() rdate: string = "";

  public mode = 'Add'; //default mode
  private id: any; // ID
  private destination: any;

  //initialize the call using the function 
  constructor(private _myService: DestinationService,
    private router: Router, public route: ActivatedRoute) { }



  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'Edit'; /*request had a parameter _id */
        this.id = paramMap.get('_id');

        //request destination info based on the id
        this._myService.getDestination(this.id).subscribe(
          data => {
            //read data and assign to private variable destination
            this.destination = data;
            //populate the parameters on the page
            //of note that this is done with the two-way bindings

            this.intdom = this.destination.intdom;            
            this.country = this.destination.country;
            this.dstate = this.destination.dstate;
            this.dcity = this.destination.dcity;            
            this.tdate = this.destination.tdate;
            this.rdate = this.destination.rdate; 

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
    console.log("You submitted: " + this.intdom + " " + this.country + " " + this.dstate + " " + this.dcity
      + " " + " " + this.tdate + " " + this.rdate);

        
    if (this.mode == 'Add')
      this._myService.addDestinations(this.intdom, this.country, this.dstate, this.dcity, this.tdate, this.rdate);
    if (this.mode == 'Edit')
      this._myService.updateDestination(this.id, this.intdom, this.country, this.dstate, this.dcity, this.tdate, this.rdate);
    this.router.navigate(['/listDestinations']);
  }

}
