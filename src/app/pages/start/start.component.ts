import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  keyword:string;
  constructor(private dataService:DataService) {
    this.keyword = "";
  }
  
  ngOnInit() {
  }

}
