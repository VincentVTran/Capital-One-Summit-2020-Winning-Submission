import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider,} from '../route-animations';

declare var particlesJS: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider
  ]
})

export class AppComponent implements OnInit {
  title = 'Trivia';

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  ngOnInit(){
    //particlesJS.load('particles-js', '../assets/particles.json', function() { console.log('callback - particles.js config loaded'); });
  }

}
