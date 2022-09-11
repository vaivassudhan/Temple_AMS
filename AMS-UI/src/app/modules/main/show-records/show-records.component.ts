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
  allVIPS:any;
  showVIPS:boolean=false;
  allNormal:any;
  isvip:boolean=false;
  name="";
  aa:boolean=false;
  Record = new FormGroup({
    ACODE:new FormControl(''),
    SCODE:new FormControl(''),
    Name:new FormControl('',[Validators.required, Validators.minLength(3)]),
    AddressL1: new FormControl('',[Validators.required, Validators.minLength(3)]),
    AddressL2: new FormControl('',[Validators.required, Validators.minLength(3)]),
    AddressL3: new FormControl(''),
    AddressL4 : new FormControl(''),
    DueDate : new FormControl(''),
    pincode: new FormControl(''),
    isvip: new FormControl(''),
  });
  constructor(private service :ApiClientService , private router:Router,
    ) { }
  iRecord:any;
  setIndex(ii){
    this.aa=ii;
    console.log
  }
  ngOnInit(): void {
    this.showVIPS=false;
    this.service.getRecords().subscribe(res=>{
      this.allRecords=res.filter(a=>a.ACODE!="50");
      this.allVIPS=res.filter(a=>a.ACODE=="50");
      this.allNormal=this.allRecords;
    
      console.log(res)
    })
  }
  editRecord(){
    console.log(this.Record.value)
    this.service.editRecords(this.Record.value.ACODE+this.Record.value.SCODE,this.Record.value).subscribe(res=>{
      console.log(res)
      // window.location.reload()
    })
  }
  getData(i){
    this.iRecord=this.allRecords[i]
    this.Record.patchValue({Name:this.iRecord.NAME})
    this.Record.patchValue({ACODE:this.iRecord.ACODE})
    this.Record.patchValue({SCODE:this.iRecord.SCODE})
    this.Record.patchValue({AddressL1:this.iRecord.AddressL1})
    this.Record.patchValue({AddressL2:this.iRecord.AddressL2})
    this.Record.patchValue({AddressL3:this.iRecord.AddressL3})
    this.Record.patchValue({AddressL4:this.iRecord.AddressL4})
    this.Record.patchValue({DueDate:this.iRecord.DUEDATE})
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
  goReminders(){
    this.router.navigate(['remind'])
  }
  onCheckChange(e){
    this.Record.patchValue({isvip:e.target.checked})
  }
  archive(){
    this.service.archiveRecord(this.Record.value.ACODE+this.Record.value.SCODE).subscribe(res=>{
      console.log(res);
      window.location.reload();
    })
  }
  toggleVIP(){
    this.showVIPS=!(this.showVIPS);
    if(this.showVIPS){
      this.allRecords=this.allVIPS;
      console.log(this.allRecords)
    }
    else{
      this.allRecords=this.allNormal;
    }
  }

  archiveRecord(i)
  {
    this.service.archiveRecord(this.allRecords[i].ACODE+this.allRecords[i].SCODE).subscribe(res=>{
      console.log(res);
      window.location.reload();
    });
  }

}
