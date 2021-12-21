import { Component, OnInit } from '@angular/core';
import { CapstoneService } from '../capstone.service';

@Component({
  selector: 'app-list-capstone',
  templateUrl: './list-capstone.component.html',
  styleUrls: ['./list-capstone.component.css']
})
export class ListCapstoneComponent implements OnInit {

  public capstone: any;

  constructor(private _myService: CapstoneService) { }

  ngOnInit() {
    this.getCapstones();
  }
getCapstones() {
  this._myService.getCapstones().subscribe(
    data => { this.capstone = data},
    err => console.error(err),
    () => console.log('finished loading')
  );
}
onDelete(capstoneId: string) {
  this._myService.deleteCapstone(capstoneId);
}
}
