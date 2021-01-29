import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../../services/api-client.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators,FormArray ,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  Record = new FormGroup({
    Name:new FormControl('',[Validators.required, Validators.minLength(3)]),
    AddressL1: new FormControl('',[Validators.required, Validators.minLength(3)]),
    AddressL2: new FormControl('',[Validators.required, Validators.minLength(5)]),
    State: new FormControl('',[Validators.required, Validators.minLength(3)]),
    City : new FormControl('',[Validators.required, Validators.minLength(2)]),
    DueDate : new FormControl('',[Validators.required, Validators.minLength(2)]),
    pincode: new FormControl(''),
  });
  constructor(
    private service:ApiClientService,
    private router:Router
  ) { }

  ngOnInit(): void {
    var oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    oneYearFromNow.setDate(1)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(oneYearFromNow);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(oneYearFromNow);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(oneYearFromNow);
    console.log(`${da}-${mo}-${ye}`);
    const due=da+"-"+mo+"-"+ye
    this.Record.patchValue({DueDate:due})
  }
  addRecord(){
    console.log(this.Record.value)
    this.service.addRecord(this.Record.value).subscribe(res=>{
      console.log(res)
    })
  }
  close(){
    window.location.reload()
  }
}
