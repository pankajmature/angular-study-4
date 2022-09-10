import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICourse } from 'src/models/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})

export class CourseCardComponent implements OnInit {
  
  @Input()
  course!: ICourse;
 
  @Input()
  cardindex!: number;


  @Output()
  courseSelected = new EventEmitter<ICourse>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageAvailable()
  {
    if (this.course.iconurl !== "" ) {
      return true;
    }
    else
    {
      return false;
    }
  }

  onViewCourseClicked()
  {
    console.log("Card Component - Button Clicked.");

    this.courseSelected.emit(this.course);

  }

}