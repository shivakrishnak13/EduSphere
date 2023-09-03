import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [MessageService]
})
export class SignInComponent implements OnInit {
  email: string = "";
  password: string = "";
  is_loading : boolean = false;

  constructor(private http: HttpClient, private studentLogin: GlobalService, private messageService: MessageService,private router: Router) { }
  ngOnInit(): void {
    console.log({ studentlogin: this.studentLogin.isStudentLogin });

  }

  showWarning() {
    this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Check Email/Password', detail: 'Email or Password are incorrect' });
  }
  handleLogin() {

    this.is_loading=true;

    let credential = {
      email: this.email,
      password: this.password
    }


    this.http.post(`${environment.API_URL}/api/student/signin`, credential).subscribe((res: any) => {

      if (res?.message === "Login Success") {

        this.is_loading = false;
        this.studentLogin.isStudentLoginSuccess();
        this.studentLogin.setStudentLoginDetails(res);


        const redirectUrl = this.studentLogin.redirectUrl || '/';
        this.router.navigate([redirectUrl]);

        // Clear the redirectUrl in the GlobalService
        this.studentLogin.redirectUrl = undefined;


      } else {
        this.is_loading = false
        this.showWarning();
      }


      console.log(res);

    })

  }


}
