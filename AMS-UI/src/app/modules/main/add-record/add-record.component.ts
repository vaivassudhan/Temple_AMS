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
    ACODE:new FormControl(''),
    SCODE:new FormControl(''),
    NAME:new FormControl('',[Validators.required, Validators.minLength(3)]),
    AddressL1: new FormControl('',[Validators.required, Validators.minLength(3)]),
    AddressL2: new FormControl(''),
    AddressL3: new FormControl(''),
    AddressL4 : new FormControl(''),
    DUEDATE : new FormControl(''),
    pincode: new FormControl(''),
    ISVIP: new FormControl(''),
  });
  isVip:Boolean=false;
  alreadyExist:boolean=false;
  vipcount:any;
  allAddress:any;
  lastRecord:any;
  constructor(
    private service:ApiClientService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.service.getRecords().subscribe(res=>{
      this.allAddress=res;
      this.lastRecord = this.allAddress[this.allAddress.length-1]["ACODE"] + " " + this.allAddress[this.allAddress.length-1]["SCODE"]
      console.log(this.lastRecord)
      this.vipcount=res.filter(res=> res.isvip=='true').length
    })

    var oneYearFromNow = new Date();
    //oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    oneYearFromNow.setMonth(oneYearFromNow.getMonth()+12)
    oneYearFromNow.setDate(1)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(oneYearFromNow);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(oneYearFromNow);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(oneYearFromNow);
    console.log(`${da}-${mo}-${ye}`);
    const due=da+"-"+mo+"-"+ye
    this.Record.patchValue({DUEDATE:due})
  }
  addRecord(){
    console.log(this.Record.value)
    this.service.addRecord(this.Record.value).subscribe(res=>{
      console.log(res)
      // alert("Added")
    })
  }
  close(){
    this.router.navigate(['add'])
    this.Record.reset();
    this.ngOnInit();
  }
  goHome(){
    this.router.navigate(['home'])
  }
  onCheckChange(e){
    this.Record.patchValue({isvip:e.target.checked})
    this.isVip=e.target.checked
    this.vipcount="V-"+String(this.vipcount+1).padStart(3,'0');
    this.Record.patchValue({ACNO:(this.vipcount)})
    if(this.isVip==false){
    this.Record.patchValue({ACNO:''})
    }
  }
  checkForExisiting(){
    let acode=this.Record.value.ACODE;
    let scode=this.Record.value.SCODE;
    let foundValue = this.allAddress.filter(a=>a.ACODE==acode && a.SCODE==scode)
    console.log(foundValue)
    if(foundValue.length>0){

      this.Record.patchValue(foundValue[0])
      this.alreadyExist=true;
    }
    console.log(this.alreadyExist)
  }
}
