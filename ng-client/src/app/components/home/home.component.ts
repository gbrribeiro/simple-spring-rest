import { Component, OnInit } from '@angular/core';
import { ListLabelComponent } from '../subcomponents/list-label/list-label.component';
import { MatTabsModule } from '@angular/material/tabs';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/Student';
import { CommonModule } from '@angular/common';
import { API_URL } from 'src/app/models/Constants/Constants';
import { Course } from 'src/app/models/Course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports : [ListLabelComponent, MatTabsModule, CommonModule]
})
export class HomeComponent implements OnInit {
  students: Array<Student> = new Array<Student>();
  courses: Array<Course> = new Array<Course>();
  studentUrl = API_URL + "/student"
  courseUrl = `${API_URL}/course`;

  constructor(private studentService : StudentService, private courseService : CourseService){

  }

  ngOnInit(){
    this.studentService.getStudents().subscribe((data : Student[]) => this.students = data);
    this.courseService.getCourses().subscribe((data) => this.courses = data);
  }
}
