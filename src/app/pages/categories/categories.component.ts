import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import {Location}  from '@angular/common';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  resultCategory: any = [
    {
      // "id": 11605,
      // "title": "classical works' other names",
      // "clues_count": 5
    }
  ];

  pageIndex = 0;
  constructor(private dataService:DataService, private location:Location,private route: ActivatedRoute, private router: Router) { 
    // console.log(this.dataService.categoryKeyWord);
    this.dataService.currentIndex = this.pageIndex.toString();
  }
  click(id){
    console.log(id);
  }
  ngOnInit() {
    this.dataService.getCategories(this.route.snapshot.params['keyword']);
    this.resultCategory = this.dataService.category;
    //console.log(this.resultCategory);
  }

}
