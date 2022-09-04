import { Component } from '@angular/core';
import { COURSES } from 'src/dbdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  courses = COURSES;

  title = 'angular-study-4';

}
