import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  categorySelected:string;
  loading:boolean = true;
  categoryOptions:any = [
    {title: "For Halloween, 19th c. Louisianans made a midnight 'dumb supper', a meal eaten without doing this, & waited for a ghost to join", id: "18042"},
    {title: "Halloween: Trick Or Treat", id: "12391"},
    {title: "Halloween", id: "4839"},
    {title: "It Happened On Halloween", id: "5783"},
    {title: "happy halloween", id: "10807"},
    {title: "Potpourriiii", id: "306"},
    {title: "Stupid Answers", id: "136"},
    {title: "Sports", id: "42"},
    {title: "Animals", id: "21"},
    {title: "Scary Movies", id: "652"},
    // {title: "", id: ""},
  ]
  constructor(private dataService:DataService,private router: Router) {
  }
  
  click(){
    //console.log(this.categorySelected);
    this.router.navigate(["/result/"+this.categorySelected]);
  }

  ngOnInit() {
    this.getCategories();
  }

  async getCategories(){
    let extractedData = await this.dataService.getCategories();
    extractedData.subscribe(
      (data) => {
        this.categoryOptions = data
        this.loading = false;
      }  
    );
  }

}
