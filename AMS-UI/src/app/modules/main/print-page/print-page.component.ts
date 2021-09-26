import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../../services/api-client.service';

@Component({
  selector: 'app-print-page',
  templateUrl: './print-page.component.html',
  styleUrls: ['./print-page.component.css']
})
export class PrintPageComponent implements OnInit {
  records:any;
  constructor(private service :ApiClientService) { }

  ngOnInit(): void {
    this.service.getRecords().subscribe(res=>{
      console.log(res)
      this.records=res.slice(0,5);
    })
  }

}
