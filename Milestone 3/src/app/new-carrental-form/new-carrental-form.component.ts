import { Component, OnInit, Input } from '@angular/core';
import { CarrentalService } from "../carrental.service";
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-carrental-form',
  templateUrl: './new-carrental-form.component.html',
  styleUrls: ['./new-carrental-form.component.css']
})
export class NewCarrentalFormComponent implements OnInit {
  @Input() location: string = "";  
  @Input() type: string = "";
  @Input() pdate: string = "";
  @Input() ddate: string = "";


  public mode = 'Add'; //default mode
  private id: any; // ID
  private carrental: any;

  //initialize the call using the function 
  constructor(private _myService: CarrentalService,
    private router: Router, public route: ActivatedRoute) { }



  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('_id')) {
        this.mode = 'Edit'; /*request had a parameter _id */
        this.id = paramMap.get('_id');

        //request carrental info based on the id
        this._myService.getCarrental(this.id).subscribe(
          data => {
            //read data and assign to private variable carrental
            this.carrental = data;
            //populate the parameters on the page
            //of note that this is done with the two-way bindings

            this.location = this.carrental.location;            
            this.type = this.carrental.type;
            this.pdate = this.carrental.pdate;
            this.ddate = this.carrental.ddate;         
 
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
    console.log("You submitted: " + this.location + " " + this.type + " " + this.pdate + " " + this.ddate);

        
    if (this.mode == 'Add')
      this._myService.addCarrentals(this.location, this.type, this.pdate, this.ddate);
    if (this.mode == 'Edit')
      this._myService.updateCarrental(this.id, this.location, this.type, this.pdate, this.ddate);
    this.router.navigate(['/listCarrentals']);
  }

}
