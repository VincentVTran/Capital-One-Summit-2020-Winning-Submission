import { Component, OnInit, OnDestroy} from '@angular/core';
import { DataService } from '../../core/data.service';
import { Routes, ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit,OnDestroy {
  points = [
    {value: null, viewValue: 'All'},
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
  min:any;
  minParam:String;
  max:any;
  maxParam:String;
  resultData: any = [
  // {
  //     "id": 1,
  //     "answer": "Election Day",
  //     "question": "1st Tuesday after the 1st Monday in November",
  //     "value": 100,
  //     "airdate": "1985-02-08T12:00:00.000Z",
  //     "category_id": 1,
  //     "game_id": null,
  //     "invalid_count": 1
  // }

  ];
  constructor(private dataService:DataService,private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.getData();
  }

  async filter(){
    if(this.min != null){
      this.minParam = await this.formatDate(this.min);
      console.log(this.minParam);
    }
    if(this.max != null){
      this.maxParam= await this.formatDate(this.max);
      console.log(this.maxParam);
    }
    let extractedData = await this.dataService.getClues(this.route.snapshot.params['categoryID'],this.pointsSelected,this.minParam,this.maxParam);
    extractedData.subscribe(
      (data) => {
        this.resultData = data;
        this.removeDateFormat();
      }  
    );
    //console.log()
  }
  async getData(){
    let extractedData = await this.dataService.getClues(this.route.snapshot.params['categoryID'],this.pointsSelected,this.min,this.max);
    extractedData.subscribe(
      (data) => {
        this.resultData = data;
        this.removeDateFormat();
      }  
    );
  }

  goBack(){
    this.router.navigate(["/start"]);
  }

  reset(){
    this.maxParam = null;
    this.minParam = null;
    this.min = null;
    this.max = null;
    this.pointsSelected = null;
    this.getData();
  }


  async removeDateFormat(){
    for(var i = 0;i<this.resultData.length;i++){
      var date = this.resultData[i].airdate;
      date = date.substring(0,date.indexOf('T'));
      this.resultData[i].airdate = date;
    }
  }
  async formatDate(date){
    //console.log(date);
    var month = await date.getMonth()+1;
    if(month < 10){
      month = "0"+month.toString();
    }
    else{
      month = month.toString();
    }

    var day = await date.getDate().toString();
    if(day < 10){
      day = "0"+day.toString();
    }
    else{
      day = day.toString();
    }

    var year = (await date.getFullYear().toString());
    //console.log(date.getYear());
    //console.log(year+"-"+month+"-"+day+"T12:00:00.000Z");
    const result = year+"-"+month+"-"+day+"T12:00:00.000Z";
    return result;
  }
  ngOnDestroy() {
    this.resultData = [];
  }

}
