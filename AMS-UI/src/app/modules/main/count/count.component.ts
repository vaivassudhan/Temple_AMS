import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../../services/api-client.service';
import { FormGroup, FormControl,Validators,FormArray ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {
  vipcount:any;
  addressCount:any;
  constructor(private service :ApiClientService , private router:Router) { }

  ngOnInit(): void {
    this.service.getRecords().subscribe(res=>{
      this.vipcount=res.filter(res=>res.isVIP=='true').length
      this.addressCount=res.filter(res=>res.isVIP!='true').length

    })
  }
  goHome(){
    this.router.navigate(['home'])
  }
  logit(){
    this.service.getRecords().subscribe(res=>{
      for(var i=0;i<res.length;i++)
      {
        if(res[i].ACODE=="50"){
          res[i]["isVIP"]=true
        }
        else{
          res[i]["isVIP"]=false
        }
      }
      res=res.filter(a=> a.ACODE!="30")
      res=res.filter(a=> a.ACODE!="49")
      res=res.filter(a=> a.ACODE!="54")
      res=res.filter(a=> a.ACODE!="55")
      res=res.filter(a=> a.ACODE!="56")
      res=res.filter(a=> a.ACODE!="57")
      res=res.filter(a=> a.ACODE!="58")
      res=res.filter(a=> a.ACODE!="59")
      res=res.filter(a=> a.ACODE!="60")






      console.log(res)
      this.service.insertAll(res).subscribe(res=>{
        console.log(res)
      })
    })
  }

}
