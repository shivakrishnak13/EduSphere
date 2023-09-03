import { Component } from '@angular/core';
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
export class InstructorAssignmentsComponent {

  date: Date | undefined;
  text: string = "";
  name: string | undefined;
  due_date: string | undefined;

  constructor(private sanitizer: DomSanitizer,private globalService : GlobalService,private datePipe: DatePipe,private http : HttpClient) {}


  assignments = [
    {
      id: 1,
      title: "CSS Grid",
      description: "Implement a responsive layout using CSS Grid techniques.",
      due_date: "2023-08-31",
      is_completed: false,
      course: "Web Development"
    },
    {
      id: 2,
      title: "JavaScript Functions",
      description: "Write and demonstrate the use of various JavaScript functions.",
      due_date: "2023-09-15",
      is_completed: true,
      course: "Programming Basics"
    },
    {
      id: 3,
      title: "History Essay",
      description: "Write an essay on a significant historical event of your choice.",
      due_date: "2023-09-10",
      is_completed: false,
      course: "History"
    },
    {
      id: 4,
      title: "Physics Lab Report",
      description: "Perform experiments and create a lab report explaining the results.",
      due_date: "2023-09-20",
      is_completed: true,
      course: "Physics"
    },
    {
      id: 5,
      title: "Art Project",
      description: "Produce a creative art piece inspired by a specific art movement.",
      due_date: "2023-09-05",
      is_completed: false,
      course: "Fine Arts"
    }
  ];

  sanitizeAndTrustHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  



  handleAssignment() {

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
        console.log(res);
        
      })


    console.log(newAsssignment);
    
  }

}
