import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  profileForm = this.fb.group({
    intDom: ['', Validators.required],
    destination: this.fb.group({
      city: ['', Validators.required],
      region: ['', Validators.required],
      country: ['', Validators.required]
    }),
    dates: this.fb.group({
      arrival: ['', Validators.required],
      departure: ['', Validators.required]
    }),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
