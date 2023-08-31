import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  assignments = [
    {
      id: 1,
      title: "CSS Grid",
      description: "Implement a responsive layout using CSS Grid techniques.",
      due_date: "2023-08-31",
      is_completed: false,
      course: "Web Development"
    },
    {
      id: 2,
      title: "JavaScript Functions",
      description: "Write and demonstrate the use of various JavaScript functions.",
      due_date: "2023-09-15",
      is_completed: true,
      course: "Programming Basics"
    },
    {
      id: 3,
      title: "History Essay",
      description: "Write an essay on a significant historical event of your choice.",
      due_date: "2023-09-10",
      is_completed: false,
      course: "History"
    },
    {
      id: 4,
      title: "Physics Lab Report",
      description: "Perform experiments and create a lab report explaining the results.",
      due_date: "2023-09-20",
      is_completed: true,
      course: "Physics"
    },
    {
      id: 5,
      title: "Art Project",
      description: "Produce a creative art piece inspired by a specific art movement.",
      due_date: "2023-09-05",
      is_completed: false,
      course: "Fine Arts"
    }
  ];
  
}
