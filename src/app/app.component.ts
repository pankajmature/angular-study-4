import { Component } from '@angular/core';
import { COURSES } from 'src/data/dbdata';
import { ICourse } from 'src/models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  courses : ICourse[] = COURSES;

  coreCourse : ICourse = this.courses[0];
  rxjsCourse : ICourse = this.courses[1];
  ngrxCourse : ICourse = this.courses[2];

  title = 'angular-study-4';

}
