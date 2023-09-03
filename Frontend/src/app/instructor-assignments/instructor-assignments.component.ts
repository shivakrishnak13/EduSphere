import { Component,OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GlobalService } from '../global.service';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-instructor-assignments',
  templateUrl: './instructor-assignments.component.html',
  styleUrls: ['./instructor-assignments.component.css']
})
export class InstructorAssignmentsComponent implements OnInit {
  assignments : any = [];
  date: Date | undefined;
  text: string = "<h1>Description here...</h1>";
  name: string | undefined;
  due_date: string | undefined;
  loading : boolean = false;
  constructor(private sanitizer: DomSanitizer,private globalService : GlobalService,private datePipe: DatePipe,private http : HttpClient) {}


  ngOnInit(): void {


    const token = this.globalService.getInstructorLoginDetails()?.token ?? '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    this.http.get(`${environment.API_URL}/api/assignment/course/${this.globalService.getInstructorLoginDetails()?.course_id}`,{headers}).subscribe((res)=>{
      this.assignments = res;
      console.log(res);
      
    })
  }

  
  sanitizeAndTrustHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  



  handleAssignment() {
    this.loading = true;
    const token = this.globalService.getInstructorLoginDetails()?.token ?? '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    let newAsssignment = {
      title: this.name,
      description: this.text,
      due_date: this.datePipe.transform(this.date, 'yyyy-MM-dd'),
      course_id : this.globalService.getInstructorLoginDetails()?.course_id 
    }

      this.http.post(`${environment.API_URL}/api/assignment`,newAsssignment,{headers}).subscribe((res)=>{
        this.loading= false;
        console.log(res);
        
      })


    console.log(newAsssignment);
    
  }

}
