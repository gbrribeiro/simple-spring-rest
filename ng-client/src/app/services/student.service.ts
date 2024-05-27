import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import { API_URL } from '../models/Constants/Constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

  getStudents(): Observable<Student[]>{
    var getUrl = `${API_URL}/student`;
    return this.httpClient.get<Student[]>(getUrl);
  }

}
