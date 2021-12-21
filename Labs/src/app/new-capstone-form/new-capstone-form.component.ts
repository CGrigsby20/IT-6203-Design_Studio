import { Component, OnInit, Input} from '@angular/core';
import { CapstoneService } from '../capstone.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-capstone-form',
  templateUrl: './new-capstone-form.component.html',
  styleUrls: ['./new-capstone-form.component.css']
})
export class NewCapstoneFormComponent implements OnInit {
  @Input() cName: string = "";
  @Input() cTitle: string = "";
  @Input() cEmail: string = "";
  @Input() cPhone: string = "";
  @Input() oName: string = "";
  @Input() oWebsite: string = "";
  @Input() oStreet: string = "";
  @Input() oZip: string = "";
  @Input() oCity: string = "";
  @Input() oState: string = "";
  @Input() pTitle: string = "";
  @Input() pDescription: string = "";
  @Input() pSkills: string = "";
  @Input() pDuties: string = "";
  @Input() pBenefit: string = "";
  @Input() pProvide : string = "";
  
  public mode = 'Add'; //default mode
  private id: any; //Capstone ID
  private capstone: any;

  //initialize the call using CapstoneService 
constructor(private _myService: CapstoneService, private router:Router, public route: ActivatedRoute) { }

ngOnInit() {
  this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id')){
          this.mode = 'Edit'; /*request had a parameter _id */ 
          this.id = paramMap.get('_id');

           //request capstone info based on the id
          this._myService.getCapstone(this.id).subscribe(
              data => { 
                  //read data and assign to private variable capstone
                  this.capstone = data;
                  //populate on the page
                  //notice that this is done through the two-way bindings
                  this.cName = this.capstone.cName;
                  this.cTitle = this.capstone.cTitle;
                  this.cEmail= this.capstone.cEmail;
                  this.cPhone = this.capstone.cPhone;
                  this.oName = this.capstone.oName;
                  this.oWebsite = this.capstone.oWebsite;
                  this.oStreet = this.capstone.oStreet;
                  this.oZip = this.capstone.oZip;
                  this.oCity = this.capstone.oCity;
                  this.oState = this.capstone.oState;
                  this.pTitle = this.capstone.pTitle;
                  this.pDescription = this.capstone.pDescription;
                  this.pSkills = this.capstone.pSkills;
                  this.pDuties = this.capstone.pDuties;
                  this.pBenefit = this.capstone.pBenefit;
                  this.pProvide = this.capstone.pProvide;
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
   
  onSubmit(){
    if (this.mode == 'Add')
    this._myService.addCapstone(this.cName ,this.cTitle, this.cEmail, this.cPhone, this.oName, this.oWebsite,
      this.oStreet, this.oZip, this.oCity, this.oState, this.pTitle, this.pDescription,
      this.pSkills, this.pDuties, this.pBenefit, this.pProvide);
  if (this.mode == 'Edit')
    this._myService.updateCapstone(this.id,this.cName ,this.cTitle, this.cEmail, this.cPhone, this.oName,
      this.oWebsite, this.oStreet, this.oZip, this.oCity, this.oState, this.pTitle,
      this.pDescription, this.pSkills, this.pDuties, this.pBenefit, this.pProvide);
      this.router.navigate(['/listCapstone']);
  }
}
