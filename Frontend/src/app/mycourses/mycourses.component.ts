import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { merge } from 'rxjs';
import { GlobalService } from '../global.service';
import { environment } from 'src/environments/environment';
import { MyCourses } from '../Allmodels.model';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {


  courses : any = []

  constructor (private http : HttpClient,private globalServices : GlobalService){}

  ngOnInit(): void {
    const token = this.globalServices.getStudentLoginDetails()?.token ?? '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    this.http.get(`${environment.API_URL}/api/course/enrolled/${this.globalServices.getStudentLoginDetails()?.id}`,{headers}).subscribe((res)=>{
      this.courses =res;
    })

  }

}
