import { Component } from '@angular/core';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent {


  courses = [
    {
      id: 1,
      name: "Introduction to Programming",
      description: "Learn the fundamentals of programming with hands-on examples.",
      image: "https://img.freepik.com/free-vector/software-development-programming-coding-learning-information-technology-courses-it-courses-all-levels-computing-hi-tech-course-concept_335657-191.jpg?w=2000&t=st=1693476608~exp=1693477208~hmac=f79bc10c3c2ed1b733e0a77bd1cd2920c5da66213b6eb6aef3c652137772c425"
    },
    {
      id: 2,
      name: "Web Development Bootcamp",
      description: "Build interactive and responsive websites from scratch.",
      image: "https://img.freepik.com/free-vector/web-development-seo-concept-design-cartoon-character-flat-style_1362-164.jpg?w=2000&t=st=1693476674~exp=1693477274~hmac=dba9334ee4fb116ca89a06ae7cf41c28606297482885a7da85ea63279cd25d5a"
    },
    {
      id: 3,
      name: "Data Science Essentials",
      description: "Explore data analysis and visualization using popular tools.",
      image: "https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg?w=2000&t=st=1693477481~exp=1693478081~hmac=f6fad8aa30c2d774f54f4491ecaca8273e0a47e17dbafdbb71df464420b4b59c"
    },
    {
      id: 4,
      name: "Graphic Design Masterclass",
      description: "Unlock your creativity with advanced graphic design techniques.",
      image: "https://img.freepik.com/free-vector/woman-studying-home-watching-graphic-design-webinar-3d-isometric-concept-vector-illustration_1284-30024.jpg?w=1380&t=st=1693477601~exp=1693478201~hmac=f30a3e93025259ae9fc45e0c4e34a11478ced96a1d7d381f6804d1939718ed40"
    },
    {
      id: 5,
      name: "English Language Proficiency",
      description: "Enhance your English language skills for effective communication.",
      image: "https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483336.jpg?w=2000&t=st=1693476713~exp=1693477313~hmac=bf6655d1e2c6b4859ee48e4242dab5247e33691410164ef9cfa708341c208a72"
    }
  ];
}
