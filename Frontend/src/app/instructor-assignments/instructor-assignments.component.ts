import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GlobalService } from '../global.service';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { TabView } from 'primeng/tabview';
import { AIService } from '../ai.service';

@Component({
  selector: 'app-instructor-assignments',
  templateUrl: './instructor-assignments.component.html',
  styleUrls: ['./instructor-assignments.component.css'],
  providers: [MessageService]
})
export class InstructorAssignmentsComponent implements OnInit {
  @ViewChild('tabView') tabView: TabView | undefined;

  assignments: any = [];
  date: Date | undefined;
  text: string = "<h1>Description here...</h1>";
  name: string | undefined;
  due_date: string | undefined;
  loading: boolean = false;
  course: string = "";
  concept: string = "";
  Levelvalue: string = "";
  loadergenrating : boolean = false;
  empty : boolean = false

  levels: any[] = [
    { name: 'Easy', value: 'Easy' },
    { name: 'Medium', value: 'Medium' },
    { name: 'Hard', value: 'Hard' }
  ];


  constructor(private globalService: GlobalService, private datePipe: DatePipe, private http: HttpClient, private messageService: MessageService, private router: Router, private route: ActivatedRoute, private aiService: AIService) { }


  ngOnInit(): void {

    this.getAllAssigment()

  }


  getAllAssigment() {
    const token = this.globalService.getInstructorLoginDetails()?.token ?? '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    this.http.get(`${environment.API_URL}/api/assignment/course/${this.globalService.getInstructorLoginDetails()?.course_id}`, { headers }).subscribe((res:any) => {

      if(res?.message == "No assignments available"){
        this.empty = true
      }

      this.assignments = res;
      console.log(res);

    })
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
      course_id: this.globalService.getInstructorLoginDetails()?.course_id
    }

    this.http.post(`${environment.API_URL}/api/assignment`, newAsssignment, { headers }).subscribe((res) => {
      this.loading = false;
      this.messageService.add({ key: 'tc', severity: 'success', summary: 'Assignment', detail: 'Assignment Added' });
      this.getAllAssigment();
      if (this.tabView) {
        console.log(this.tabView);

        this.tabView.activeIndex = 0;
      }
    })
  }

  async generateAssignment() {
    this.loadergenrating = true;
   
    
    
      // if(response == "Yes"){
      //   let res = await this.aiService.makeOpenAIRequest(prompt);
      //   this.loadergenrating = false;
      //   this.text= res;
    //   console.log(res);

    // }else{
    //   this.loadergenrating = false;
    //  this.messageService.add({ key: 'tc', severity: 'info', summary: 'Failed to Genrate', detail: 'Course and Concept are Matched' });
    // }

    let payload = {
        course: this.course,
        concept: this.concept,
        level: this.Levelvalue
      }

    const token = this.globalService.getInstructorLoginDetails()?.token ?? '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    this.http.post(`https://lazy-gold-kingfisher-coat.cyclic.app/api/ai/assignment`,payload,{headers}).subscribe((res:any)=>{
      this.loadergenrating = false
      console.log(res);
      this.text = res;
      this.getAllAssigment()
    })
    

    this.loadergenrating = false
  }

}
