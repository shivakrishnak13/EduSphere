import { Injectable } from '@angular/core';
import { StudentLogin } from './Allmodels.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {
    // Initialize is_StudentLogin from local storage or set it to false if not found
    this.is_StudentLogin = localStorage.getItem('is_StudentLogin') === 'true' || false;
    const storedStudentLoginDetails = localStorage.getItem('studentLoginDetails');
    this.studentLoginDetails = storedStudentLoginDetails ? JSON.parse(storedStudentLoginDetails) : null;
  }
  private studentLoginDetails : StudentLogin | null;
  private is_StudentLogin: boolean = false;
  private is_InstructorLogin : boolean = false;
  public redirectUrl: string | undefined; 

  get isStudentLogin(): boolean {
    return this.is_StudentLogin;
  }

  set isStudentLogin(value: boolean) {
    this.is_StudentLogin = value;
    // Update local storage when the property is set
    localStorage.setItem('is_StudentLogin', value.toString());
  }

  isStudentLoginSuccess() {
    // Set the property to true and update local storage
    this.isStudentLogin = true;
  }



  getStudentLoginDetails(): StudentLogin | null {
    return this.studentLoginDetails;
  }

  setStudentLoginDetails(details: StudentLogin | null) {
    this.studentLoginDetails = details;
    // Convert the object to a JSON string and update local storage
    localStorage.setItem('studentLoginDetails', JSON.stringify(details));
  }

}
