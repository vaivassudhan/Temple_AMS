import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../../services/api-client.service';
import { FormGroup, FormControl,Validators,FormArray ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import {NgxPrinterModule} from 'ngx-printer';

@Component({
  selector: 'app-show-records',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css']
})
export class ShowRecordsComponent implements OnInit {
  allRecords: any;
  isvip:boolean=false;
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
  constructor(private service :ApiClientService , private router:Router,
    ) { }
  iRecord:any;
  ngOnInit(): void {
    this.service.getRecords().subscribe(res=>{
      this.allRecords=res;
      this.allRecords=this.allRecords.sort((a, b) => {
        return a.SCODE - b.SCODE;
    });
    
      console.log(res)
    })
  }
  editRecord(){
    console.log(this.Record.value)
    this.service.editRecords(this.Record.value.ACNO,this.Record.value).subscribe(res=>{
      console.log(res)
      window.location.reload()
    })
  }
  getData(i){
    this.iRecord=this.allRecords[i]
    this.Record.patchValue({Name:this.iRecord.Name})
    this.Record.patchValue({ACNO:this.iRecord.ACNO})
    this.Record.patchValue({AddressL1:this.iRecord.AddressL1})
    this.Record.patchValue({AddressL2:this.iRecord.AddressL2})
    this.Record.patchValue({State:this.iRecord.State})
    this.Record.patchValue({City:this.iRecord.City})
    this.Record.patchValue({DueDate:this.iRecord.DueDate})
    this.Record.patchValue({pincode:this.iRecord.pincode})
    // this.Record.patchValue({isvip:this.iRecord.isvip})
    if(this.iRecord.isvip=='true'){
      this.isvip=true
    }
  }
  close(){
    window.location.reload()
  }
  goHome(){
    this.router.navigate(['home'])
  }
  onCheckChange(e){
    this.Record.patchValue({isvip:e.target.checked})
  }
  archive(){
    this.service.archiveRecord(this.Record.value.ACNO).subscribe(res=>{
      console.log(res)
    })
  }

}
