import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from 'src/app/models/Student';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss'],
  standalone : true,
  imports : [MatFormFieldModule, MatButtonModule, MatInputModule,ReactiveFormsModule],
})
export class StudentDialogComponent {
  outputData : Student | undefined ;
  studentForm: FormGroup;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: Student, private fb: FormBuilder, public dialog:MatDialogRef<StudentDialogComponent>){
    this.studentForm = this.fb.group({
      id: [{value: data.id, disabled:true}],
      name: [data.name, Validators.required],
      lastName: [data.lastName, Validators.required],
      birthDate: [data.birthDate, Validators.required],
      age: [data.age, [Validators.required, Validators.min(0)]],
    });
  }
  
  onSubmit(): void {
    this.closeDialog();
  }

  closeDialog(){
    this.studentForm.get('id')?.enable();
    this.studentForm.value.addresses = this.data.addresses;
    console.log(this.studentForm.value);
    
    this.dialog.close(this.studentForm.value);
  }
}
