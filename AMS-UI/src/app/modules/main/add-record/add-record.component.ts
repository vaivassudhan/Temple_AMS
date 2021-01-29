import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl,Validators,FormArray ,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  Record = new FormGroup({
    AddressL1: new FormControl('',[Validators.required, Validators.minLength(3)]),
    AddressL2: new FormControl('',[Validators.required, Validators.minLength(5)]),
    State: new FormControl('',[Validators.required, Validators.minLength(3)]),
    City : new FormControl('',[Validators.required, Validators.minLength(2)]),
    pincode: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }
  addRecord(){
    console.log(this.Record.value)
  }
}
