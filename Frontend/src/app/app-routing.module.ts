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
import { InstructorAssignmentsComponent } from './instructor-assignments/instructor-assignments.component';
import { AuthGuard } from './auth.guard';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { InstructorsingleassignComponent } from './instructorsingleassign/instructorsingleassign.component';
import { InstructorAuthGuard } from './intructor-auth.guard';
import { CourseAssignmentsComponent } from './course-assignments/course-assignments.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { InstructorAnnouncementComponent } from './instructor-announcement/instructor-announcement.component';
import { SingleAnnouncementComponent } from './single-announcement/single-announcement.component';


const routes: Routes = [
  {path: "sign-up", component: SignUpComponent},
  {path: "sign-in", component: SignInComponent},
  {path: "my-courses", component: MycoursesComponent,canActivate : [AuthGuard]},
  {path: "assignments", component: AssignmentsComponent, canActivate : [AuthGuard]},
  {path: "", component: AllCoursesComponent},
  {path: "assignment/:id", component: SingleAssignmentComponent, canActivate : [AuthGuard]},
  {path: "instructor/signup", component: InstructorSignupComponent},
  {path: "instructor/signin", component: InstructorSigninComponent},
  {path: "instructor/assignments", component: InstructorAssignmentsComponent,canActivate:[InstructorAuthGuard]},
  {path: "instructor/announcements", component: InstructorAnnouncementComponent,canActivate:[InstructorAuthGuard]},
  {path: "instructor/assignments/:id", component: InstructorsingleassignComponent,canActivate:[InstructorAuthGuard]},
  {path: "instructor", component: InstructorDashboardComponent},
  {path: "course-assignments/:courseid", component: CourseAssignmentsComponent},
  {path: "announcements", component: AnnouncementComponent,canActivate:[AuthGuard]},
  {path: "single-announcement/:id", component: SingleAnnouncementComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
