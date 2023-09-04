import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-assignment',
  templateUrl: './single-assignment.component.html',
  styleUrls: ['./single-assignment.component.css']
})
export class SingleAssignmentComponent implements OnInit {

  isEdit : boolean = false;
  
  assignment :any = {}


  constructor(private http: HttpClient, private route: ActivatedRoute, private globalService: GlobalService, private sanitizer: DomSanitizer, private messageService: MessageService, private confirmationService: ConfirmationService,private router: Router,private datePipe: DatePipe) { }


  ngOnInit(): void {
    this.getAllAssignemnts()
  }

  sanitizeAndTrustHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getAllAssignemnts(){
    const token = this.globalService.getInstructorLoginDetails()?.token ?? '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    const assignmentId = this.route.snapshot.params['id'];
    this.http.get(`${environment.API_URL}/api/assignment/${assignmentId}`, { headers }).subscribe((res:any) => {
      this.assignment = res;
      
    })
  }

}
