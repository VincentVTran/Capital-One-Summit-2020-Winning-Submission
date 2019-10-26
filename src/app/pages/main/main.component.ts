import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  categories = [
    {value: 1, viewValue: 'Test Category1'},
    {value: 2, viewValue: 'Test Category1'},
    {value: 3, viewValue: 'Test Category1'}
  ];

  points = [
    {value: 100, viewValue: '100'},
    {value: 200, viewValue: '200'},
    {value: 300, viewValue: '300'},
    {value: 400, viewValue: '400'},
    {value: 500, viewValue: '500'},
    {value: 600, viewValue: '600'},
    {value: 700, viewValue: '700'},
    {value: 800, viewValue: '800'},
    {value: 900, viewValue: '900'},
    {value: 1000, viewValue: '1000'},
  ];
  pointsSelected:any;
  categorySelected:any;
  min:any;
  max:any;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    
  }

}
