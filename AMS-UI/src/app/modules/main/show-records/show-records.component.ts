import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../../services/api-client.service';
import { FormGroup, FormControl,Validators,FormArray ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-show-records',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css']
})
export class ShowRecordsComponent implements OnInit {
  allRecords: any;
  Record = new FormGroup({
    ACNO:new FormControl(''),
    Name:new FormControl('',[Validators.required, Validators.minLength(3)]),
    AddressL1: new FormControl('',[Validators.required, Validators.minLength(3)]),
    AddressL2: new FormControl('',[Validators.required, Validators.minLength(3)]),
    State: new FormControl(''),
    City : new FormControl(''),
    DueDate : new FormControl(''),
    pincode: new FormControl(''),
    isvip: new FormControl(''),
  });
  constructor(private service :ApiClientService) { }
  iRecord:any;
  ngOnInit(): void {
    this.service.getRecords().subscribe(res=>{
      this.allRecords=res;
    })
  }
  addRecord(){
    console.log(this.Record.value)
    this.service.addRecord(this.Record.value).subscribe(res=>{
      console.log(res)
      // alert("Added")
    })
  }
  getData(i){
    this.iRecord=this.allRecords[i]
    this.Record.patchValue({Name:this.iRecord.Name})
    this.Record.patchValue({ACNO:this.iRecord.ACNO})
    this.Record.patchValue({AddressL1:this.iRecord.AddressL1})
    this.Record.patchValue({AddressL2:this.iRecord.AddressL2})
    this.Record.patchValue({State:this.iRecord.State})
    this.Record.patchValue({DueDate:this.iRecord.DueDate})
    this.Record.patchValue({pincode:this.iRecord.pincode})
  }
  close(){
    window.location.reload()
  }
  goHome(){
    // this.router.navigate(['home'])
  }

}
