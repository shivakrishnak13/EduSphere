import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { AllDepartment } from '../Allmodels.model';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  responsiveOptions: any[] | undefined;
  departments : any = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

      this.http.get(`https://seqli.vercel.app/api/department/courses`).subscribe((res)=>{
        this.departments = res
        
      })



    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }









}
