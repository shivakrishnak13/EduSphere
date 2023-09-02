import { Component } from '@angular/core';

@Component({
  selector: 'app-single-assignment',
  templateUrl: './single-assignment.component.html',
  styleUrls: ['./single-assignment.component.css']
})
export class SingleAssignmentComponent {
  
  assignment = {
    id: 1,
    title: "CSS Grid",
    description: `
      Write a CSS Grid layout for the following task:
      Design a product page layout with the following components:
      
      1. Header with logo and navigation menu.
      2. Product showcase section with images and details.
      3. Product details and specifications.
      4. Customer reviews section.
      5. Footer with contact information and links.
      
      Use CSS Grid to arrange these components in a responsive and visually appealing manner.
      
      Your solution should consider different screen sizes and provide a consistent user experience.
    `,
    dueDate: "2023-09-15"
  };
}
