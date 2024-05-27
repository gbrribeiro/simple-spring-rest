import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import { AppComponent } from './app.component';
import { ClassViewComponent } from './components/class-view/class-view.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListLabelComponent } from './components/subcomponents/list-label/list-label.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StudentDialogComponent } from './components/subcomponents/student-dialog/student-dialog.component';
import { CourseDialogComponent } from './components/subcomponents/course-dialog/course-dialog.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  { path: '', component: HomeComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ClassViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
    
})
export class AppModule {
  
 }
