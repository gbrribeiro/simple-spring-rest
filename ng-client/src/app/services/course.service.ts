import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../models/Constants/Constants';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient:HttpClient) { }

  getCourses(): Observable<Course[]>{
    var getUrl = `${API_URL}/course`;
    return this.httpClient.get<Course[]>(getUrl);
  }

}
