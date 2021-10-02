import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators,FormArray ,FormBuilder} from '@angular/forms';
import { ApiClientService } from 'src/app/services/api-client.service';
@Component({
  selector: 'app-print-range',
  templateUrl: './print-range.component.html',
  styleUrls: ['./print-range.component.css']
})
export class PrintRangeComponent implements OnInit {
  showDetails:Boolean=false;
  allRecords:any;
  Records:any=[];
  showPrint:boolean=false;
  constructor(private router:Router, private service:ApiClientService) { }
  Range = new FormGroup({
    FACODE:new FormControl('',[Validators.required, Validators.minLength(2)]),
    FSCODE:new FormControl('',[Validators.required, Validators.minLength(2)]),
    TACODE:new FormControl('',[Validators.required, Validators.minLength(2)]),
    TSCODE:new FormControl('',[Validators.required, Validators.minLength(2)]),
  });
  ngOnInit(): void {
    this.service.getRecords().subscribe(res=>{
      this.allRecords=res;
    })
  }
  goHome(){
    this.router.navigate(['home'])
   
  }
  getDetails(){
    this.Records=[];
    let fa=this.Range.value.FACODE;
    let fs=this.Range.value.FSCODE;
    let ta=this.Range.value.TACODE;
    let ts=this.Range.value.TSCODE;

    for(var i=0;i<this.allRecords.length;i++){
      if(this.allRecords[i]["ACODE"]>= fa && this.allRecords[i]["ACODE"]<ta
      && this.allRecords[i]["SCODE"]>= fs)
      {
       this.Records.push(this.allRecords[i]);
      }
      if(this.allRecords[i]["ACODE"]==ta && this.allRecords[i]["SCODE"]<=ts){
        this.Records.push(this.allRecords[i]);
       }
    }

  }
  showDet(){
    this.getDetails();
    this.showDetails=true;
    this.showPrint=false;
  }
  printRec(){
    this.getDetails();
    this.showPrint=true;
    this.showDetails=false;
    console.log(this.showDetails,this.showPrint)
  }
}
