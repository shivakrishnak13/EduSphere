import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-instructorsingleassign',
  templateUrl: './instructorsingleassign.component.html',
  styleUrls: ['./instructorsingleassign.component.css']
})
export class InstructorsingleassignComponent implements OnInit {

  assignment : any= {}

  constructor (private http: HttpClient,private route: ActivatedRoute,private globalService: GlobalService,private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    const token = this.globalService.getInstructorLoginDetails()?.token ?? '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    const assignmentId = this.route.snapshot.params['id'];
    this.http.get(`${environment.API_URL}/api/assignment/${assignmentId}`,{headers}).subscribe((res)=>{
      console.log(res);
      this.assignment= res;
    })

  }

  sanitizeAndTrustHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  
}
