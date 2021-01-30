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
      this.vipcount=res.filter(res=>res.isvip=='true').length
      this.addressCount=res.filter(res=>res.isvip!='true').length

    })
  }
  goHome(){
    this.router.navigate(['home'])
  }

}
