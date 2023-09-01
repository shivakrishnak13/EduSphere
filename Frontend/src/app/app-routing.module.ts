import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { SingleAssignmentComponent } from './single-assignment/single-assignment.component';
import { InstructorSignupComponent } from './instructor-signup/instructor-signup.component';
import { InstructorSigninComponent } from './instructor-signin/instructor-signin.component';

const routes: Routes = [
  {path: "sign-up", component: SignUpComponent},
  {path: "sign-in", component: SignInComponent},
  {path: "all-courses", component: AllCoursesComponent},
  {path: "assignments", component: AssignmentsComponent},
  {path: "", component: MycoursesComponent},
  {path: "assignment/:id", component: SingleAssignmentComponent},
  {path: "instructor/signup", component: InstructorSignupComponent},
  {path: "instructor/signin", component: InstructorSigninComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
