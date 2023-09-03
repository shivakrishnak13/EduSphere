import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyCourses } from '../Allmodels.model'
import { MessageService } from 'primeng/api';

interface Department {
  name: string;
  code: string;
}

@Component({
  selector: 'app-instructor-signup',
  templateUrl: './instructor-signup.component.html',
  styleUrls: ['./instructor-signup.component.css']
})
export class InstructorSignupComponent implements OnInit {
  is_loading: boolean = false;
  name: string | undefined
  date: Date | undefined
  departments: any = [];
  seletedDepartments: any | undefined;
  email: string = "";
  contact_number: string = "";
  password: string = "";
  Confirmpassword: string = "";
  gender!: string;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  ngOnInit(): void {

    this.http.get(`https://seqli.vercel.app/api/instructor/course/available`).subscribe((res) => {
      this.departments = res
    })

  }

  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Password', detail: 'password and confirmed are not same' });
  }

  showTopALL() {
    this.messageService.add({ key: 'tc', severity: 'info', summary: 'All Feilds are Required', detail: 'Please Fill all Fields' });
  }
  genderOptions: any[] = [
    { name: 'Male', value: 'Male' },
    { name: 'Female', value: 'Female' },
    { name: 'Others', value: 'Others' }
  ];

  createInstructorProfile() {
    this.is_loading = true;
    let selectCourseid: number = this.seletedDepartments?.id


    if (this.name == '' || this.email == "" || this.gender == undefined || this.contact_number == "null" || this.password == "" || selectCourseid == undefined) {
      this.is_loading = false;
      return this.showTopALL();
    }

    if (this.password !== this.Confirmpassword) {
      this.is_loading = false;
      return this.showTopCenter()
    }

    let newInstructor = {
      name: this.name,
      email: this.email,
      contactNumber: this.contact_number,
      courseId: selectCourseid,
      gender : this.gender,
      password :this.password 
    }

    console.log(newInstructor);
    

  }
}