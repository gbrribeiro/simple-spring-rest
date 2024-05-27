import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Course } from 'src/app/models/Course';
import { Student } from 'src/app/models/Student';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Address } from 'src/app/models/Address';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { CommonModule } from '@angular/common';




@Component({
  standalone : true,
  selector: 'app-list-label',
  templateUrl: './list-label.component.html',
  styleUrls: ['./list-label.component.scss'],
  imports: [MatListModule, MatIconModule, MatButtonModule, HttpClientModule, MatDialogModule, CommonModule]

})
export class ListLabelComponent {
  @Input() course : Course | undefined;
  @Input() student : Student | undefined;

  @Input() endpoint = "";
  
  constructor(private http : HttpClient, public dialog: MatDialog){

  }
  delete(){
    if(this.student != null){
      var delEndpoint = `${this.endpoint}/${this.student.id}`;
      console.log(delEndpoint);
      
      this.http.delete(`${this.endpoint}/${this.student.id}`).subscribe();
    }
    if(this.course != null){
      this.http.delete(`${this.endpoint}/${this.course.id}`).subscribe();
    }
  }
  //TODO: implements

  edit(){
    this.openDialog();
  }

  openDialog(){
    if(this.student != null){
      this.dialog.open(StudentDialogComponent, {
        data: this.student,
      }).afterClosed().subscribe((data : Student) => {
        console.log(data);
        this.http.put(this.endpoint, data).subscribe();
      });
    }

    if(this.course != null){
      this.dialog.open(CourseDialogComponent, {
        data: this.course,
      }).afterClosed().subscribe((data : Course) => this.course = data);
    }
  }
}
