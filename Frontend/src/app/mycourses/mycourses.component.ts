import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { empty, merge } from 'rxjs';
import { GlobalService } from '../global.service';
import { environment } from 'src/environments/environment';
import { MyCourses } from '../Allmodels.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {


  courses : any = []
  loading : boolean = false;
  empty : boolean = false;
  isLogin : boolean = false;

  array = new Array(9)
  constructor (private http : HttpClient,private globalServices : GlobalService,private router : Router){}

  ngOnInit(): void {
    this.loading=true;
    const token = this.globalServices.getStudentLoginDetails()?.token ?? '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    this.http.get(`${environment.API_URL}/api/course/enrolled/${this.globalServices.getStudentLoginDetails()?.id}`,{headers}).subscribe((res:any)=>{
      this.loading=false;
      console.log(res);         
      if(res.message == 'You did not enrolled any courses, Please enroll!' ){
        return this.empty= true 
      }else if(res.message == "Session expired, Please login."){
        this.empty= true
        this.globalServices.logout()
        this.router.navigate(['/'])
        return this.isLogin = true;
      }
      return this.courses =res;
        
    })
   

  }

 

}
