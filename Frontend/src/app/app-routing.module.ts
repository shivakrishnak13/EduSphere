import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { SingleAssignmentComponent } from './single-assignment/single-assignment.component';

const routes: Routes = [
  {path: "sign-up", component: SignUpComponent},
  {path: "sign-in", component: SignInComponent},
  {path: "all-courses", component: AllCoursesComponent},
  {path: "assignments", component: AssignmentsComponent},
  {path: "", component: MycoursesComponent},
  {path: "assignment/:id", component: SingleAssignmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
