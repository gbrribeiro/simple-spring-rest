import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss'],
  standalone : true,
  imports : [MatFormFieldModule, MatButtonModule],
})
export class CourseDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Course){
  }
}
