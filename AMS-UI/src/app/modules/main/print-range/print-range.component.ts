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
    FACODE:new FormControl('',[Validators.required, Validators.minLength(4)]),
    TACODE:new FormControl('',[Validators.required, Validators.minLength(4)]),
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


    let fromCODE=this.Range.value.FACODE;
    let toACODE=this.Range.value.TACODE;

    for(var i=0;i<this.allRecords.length;i++)
    {
      var code=this.allRecords[i].ACODE+this.allRecords[i].SCODE;
      if(code>=fromCODE && code<=toACODE)
      {
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
