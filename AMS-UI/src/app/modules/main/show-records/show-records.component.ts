import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../../services/api-client.service';
@Component({
  selector: 'app-show-records',
  templateUrl: './show-records.component.html',
  styleUrls: ['./show-records.component.css']
})
export class ShowRecordsComponent implements OnInit {
  allRecords: any;

  constructor(private service :ApiClientService) { }

  ngOnInit(): void {
    this.service.getRecords().subscribe(res=>{
      this.allRecords=res;
    })
  }

}
