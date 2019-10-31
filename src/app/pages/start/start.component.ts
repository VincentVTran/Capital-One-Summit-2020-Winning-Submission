import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  categorySelected:string;

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
    // {title: "", id: ""},
    // {title: "", id: ""},
    // {title: "", id: ""},
    // {title: "", id: ""},
    // {title: "", id: ""},
    // {title: "", id: ""},
    // {title: "", id: ""},
    // {title: "", id: ""},
    // {title: "", id: ""},
    // {title: "", id: ""},
    // {title: "", id: ""},
    // {title: "", id: ""},
  ]
  constructor(private router: Router) {
  }
  
  click(){
    //console.log(this.categorySelected);
    this.router.navigate(["/result/"+this.categorySelected]);
  }

  ngOnInit() {
  }

}
