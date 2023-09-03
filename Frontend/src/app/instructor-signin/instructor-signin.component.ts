import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-instructor-signin',
  templateUrl: './instructor-signin.component.html',
  styleUrls: ['./instructor-signin.component.css'],
  providers: [MessageService]
})
export class InstructorSigninComponent {
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient, private studentLogin: GlobalService, private messageService: MessageService,private router: Router) { }
  ngOnInit(): void {
    console.log({ studentlogin: this.studentLogin.isStudentLogin });

  }

  showWarning(warn:string,summary: string,detail:string) {
    this.messageService.add({ key: 'tc', severity: warn, summary: summary, detail: detail });
  }
  handleLogin() {

    if(this.email == "" || this.password == ""){
      return this.showWarning('info','All Fields are Required','Please All are Fields')
    }


    let credential = {
      email: this.email,
      password: this.password
    }

    console.log(credential);

    // this.http.post(`${environment.API_URL}/api/instructor/signin`, credential).subscribe((res: any) => {

    //   if (res?.message === "Login Success") {

    //     this.studentLogin.isStudentLoginSuccess();
    //     this.studentLogin.setStudentLoginDetails(res);


    //     const redirectUrl = this.studentLogin.redirectUrl || '/';
    //     this.router.navigate([redirectUrl]);

    //     // Clear the redirectUrl in the GlobalService
    //     this.studentLogin.redirectUrl = undefined;


    //   } else {
    //     this.showWarning('warn','Check Email/Password','Email or Password are incorrect');
    //   }


    //   console.log(res);

    // })

  }
}
