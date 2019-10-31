import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider,} from '../route-animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slider
  ]
})
export class AppComponent {
  title = 'Trivia';
  
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
