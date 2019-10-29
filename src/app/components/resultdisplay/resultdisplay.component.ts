import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultdisplay',
  templateUrl: './resultdisplay.component.html',
  styleUrls: ['./resultdisplay.component.css']
})
export class ResultdisplayComponent implements OnInit {
  @Input() question: any;
  @Input() answer: any;
  @Input() category: any;
  @Input() date: any;
  @Input() triviaValue: Number;
  panelOpenState:any ;
  constructor() { }

  ngOnInit() {
  }

}
