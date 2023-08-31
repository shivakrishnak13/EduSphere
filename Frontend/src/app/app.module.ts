import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from './footer/footer.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CarouselModule } from 'primeng/carousel';
import { AssignmentsComponent } from './assignments/assignments.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { SingleAssignmentComponent } from './single-assignment/single-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    NavbarComponent,
    FooterComponent,
    AllCoursesComponent,
    AssignmentsComponent,
    MycoursesComponent,
    SingleAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
    InputTextModule,
    CarouselModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
