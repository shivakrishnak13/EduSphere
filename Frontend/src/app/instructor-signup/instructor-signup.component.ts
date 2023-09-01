import { Component,OnInit } from '@angular/core';

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
    date : Date | undefined
    departments : Department[] | undefined;
    seletedDepartments : Department | undefined;
  ngOnInit(): void {
    this.departments = [
      { name: 'HTML', code: 'HTML' },
      { name: 'CSS', code: 'CSS' },
      { name: 'JavaScript', code: 'JS' },
      { name: 'Python', code: 'PY' },
      { name: 'Django', code: 'DJ' }
    ]
    
  }

  value!: number;
    
    paymentOptions: any[] = [
        { name: 'Male', value: 1 },
        { name: 'Female', value: 2 },
        { name: 'Others', value: 3 }
    ];

}
