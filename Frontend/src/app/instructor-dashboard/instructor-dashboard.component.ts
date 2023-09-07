import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.css']
})
export class InstructorDashboardComponent implements OnInit{

  students : any | undefined;
  data: any;
  options: any;

  constructor (private http: HttpClient,private globalService : GlobalService ) {}

  ngOnInit(): void {
    
    this.getStudents()


    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['Submission', 'Not Submited', 'Partially'],
            datasets: [
                {
                    data: [60, 30, 10],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
    
  }
  
  getStudents(){
    const token = this.globalService.getInstructorLoginDetails()?.token ?? '';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    this.http.get(`${environment.API_URL}/api/student/course/instructor/${this.globalService.getInstructorLoginDetails()?.id}`,{headers}).subscribe((data) => {
    this.students = data
    console.log(data);
    });
  }



  

    
}
