import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/services/api-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder-management',
  templateUrl: './reminder-management.component.html',
  styleUrls: ['./reminder-management.component.css']
})
export class ReminderManagementComponent implements OnInit {

  constructor(private service: ApiClientService,private router:Router){ }
  ReminderRecords:any=[];
  ngOnInit(): void {
    let curyear = new Date().getFullYear();
    let curmonth = new Date().getMonth()+1;
    //console.log(year,month)
    
    this.service.getRecords().subscribe(res=>{
      for(let i=0;i<res.length;i++){
        let duedate = new Date(Date.parse(res[i].DUEDATE))
        let duemonth = duedate.getMonth()+1;
        let dueyear = duedate.getFullYear();
        if(dueyear==curyear){
          if(duemonth==curmonth || duemonth==curmonth+1){
            this.ReminderRecords.push(res[i]);
          }
        }

      }
      
    })
  }

  goHome(){
    this.router.navigate(['home'])
  }
  goBack(){
    
    this.router.navigate(['show'])
  }

}
