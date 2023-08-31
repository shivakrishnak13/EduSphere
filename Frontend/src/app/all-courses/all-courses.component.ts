import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }


  departments : any[]= [
    {
      id: 1,
      dept_name: "Full Stack Web Development",
      courses: [
        { course_id: 1, course_name: "HTML", description: "Hyper Text Markup Language", instructor: "Ramesh" },
        { course_id: 2, course_name: "CSS", description: "Cascading Style Sheets", instructor: "Suresh" },
        { course_id: 3, course_name: "JavaScript", description: "Programming language for the web", instructor: "Priya" },
        { course_id: 4, course_name: "Node.js", description: "Server-side JavaScript runtime", instructor: "Rajesh" },
        { course_id: 5, course_name: "React", description: "JavaScript library for building UI", instructor: "Meera" }
      ]
    },
    {
      id: 2,
      dept_name: "Data Science",
      courses: [
        { course_id: 1, course_name: "Introduction to Data Science", description: "Basics of data analysis", instructor: "Amit" },
        { course_id: 2, course_name: "Machine Learning", description: "Building predictive models", instructor: "Neha" },
        { course_id: 3, course_name: "Statistical Analysis", description: "Analyzing data patterns", instructor: "Sanjay" },
        { course_id: 4, course_name: "Data Visualization", description: "Representing data visually", instructor: "Priyanka" },
        { course_id: 5, course_name: "Deep Learning", description: "Neural networks and AI", instructor: "Rahul" }
      ]
    },
    {
      id: 11,
      dept_name: "Mobile App Development",
      courses: [
        { course_id: 1, course_name: "Android Basics", description: "Introduction to Android app development", instructor: "Karthik" },
        { course_id: 2, course_name: "iOS Development", description: "Creating apps for Apple devices", instructor: "Ananya" },
        { course_id: 3, course_name: "Flutter Framework", description: "Building cross-platform apps", instructor: "Vikram" },
        { course_id: 4, course_name: "Mobile UI Design", description: "Designing user interfaces for mobile", instructor: "Nisha" },
        { course_id: 5, course_name: "Mobile App Testing", description: "Ensuring app quality and functionality", instructor: "Arun" }
      ]
    },
    {
      id: 12,
      dept_name: "Business Administration",
      courses: [
        { course_id: 1, course_name: "Introduction to Business", description: "Foundational concepts in business", instructor: "Samantha" },
        { course_id: 2, course_name: "Marketing Strategies", description: "Effective marketing techniques", instructor: "David" },
        { course_id: 3, course_name: "Financial Management", description: "Managing business finances", instructor: "Sophie" },
        { course_id: 4, course_name: "Leadership Skills", description: "Developing leadership qualities", instructor: "Michael" },
        { course_id: 5, course_name: "Business Ethics", description: "Ethical considerations in business", instructor: "Emily" }
      ]
    },
    {
      id: 13,
      dept_name: "Graphic Design",
      courses: [
        { course_id: 1, course_name: "Design Fundamentals", description: "Basics of graphic design", instructor: "Oliver" },
        { course_id: 2, course_name: "Typography", description: "Art of arranging type", instructor: "Isabella" },
        { course_id: 3, course_name: "Adobe Photoshop Masterclass", description: "Advanced image editing", instructor: "Lucas" },
        { course_id: 4, course_name: "Illustrator for Beginners", description: "Creating vector graphics", instructor: "Ava" },
        { course_id: 5, course_name: "Web Design Principles", description: "Designing for the web", instructor: "Liam" }
      ]
    },
    {
      id: 14,
      dept_name: "Languages and Linguistics",
      courses: [
        { course_id: 1, course_name: "Introduction to Linguistics", description: "Study of language structure", instructor: "Elena" },
        { course_id: 2, course_name: "French Language", description: "Learning spoken and written French", instructor: "Louis" },
        { course_id: 3, course_name: "Spanish Grammar", description: "Exploring Spanish language rules", instructor: "Marta" },
        { course_id: 4, course_name: "Chinese Characters", description: "Writing and understanding Chinese characters", instructor: "Wei" },
        { course_id: 5, course_name: "Translation Techniques", description: "Strategies for effective translation", instructor: "Anna" }
      ]
    },
    {
      id: 15,
      dept_name: "Environmental Science",
      courses: [
        { course_id: 1, course_name: "Introduction to Ecology", description: "Understanding ecosystems", instructor: "Daniel" },
        { course_id: 2, course_name: "Climate Change Studies", description: "Exploring global climate patterns", instructor: "Grace" },
        { course_id: 3, course_name: "Sustainable Energy", description: "Renewable energy sources", instructor: "Leo" },
        { course_id: 4, course_name: "Biodiversity Conservation", description: "Preserving species diversity", instructor: "Sophia" },
        { course_id: 5, course_name: "Environmental Ethics", description: "Ethical considerations in environmental issues", instructor: "Max" }
      ]
    }
  ];







}
