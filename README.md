# EduHub

EduHub is an innovative educational institute website designed to provide students with a seamless enrollment experience in a wide array of courses for enhanced learning. It incorporates a user-friendly instructor dashboard that enables instructors to create assignments either manually or with the aid of cutting-edge AI technology. Furthermore, instructors have the capability to make timely announcements, ensuring students are kept abreast of important updates.

Live : https://edu-sphere-seven.vercel.app/

## Key Features

- **Student Dashboard**: Easily manage courses and assignments.
- **Intuitive Instructor Dashboard**: Streamlined assignment creation.
- **Student Enrollment and Assignment Submission**: Seamless interaction.
- **Generative AI Chatbot**: Enhances user interaction.
- **Cutting-edge AI Assignment Generator**: Automates assignment creation.
- **Announcement System**: Disseminate crucial updates.

## Tech Stack

- Frontend: Angular
- Backend: Node.js
- Database: MySQL

## Backend

The backend is built on Node.js.

### Endpoints and Usage

| Route                                                   | Use Case                                                         | Access                                       |
|---------------------------------------------------------|-----------------------------------------------------------------|----------------------------------------------|
| GET /api/student                                        | Fetch all students                                              | authentication, authorize(["admin"])         |
| POST /api/student/signup                                | Register a new student                                          | Public                                       |
| POST /api/student/signin                                | Login a student                                                 | Public                                       |
| GET /api/student/course/instructor/:id                   | Get students in a course assigned to an instructor               | authentication, authorize(["instructor", "admin"]) |
| GET /api/instructor                                     | Fetch all instructors                                           | authentication, authorize(["admin"])         |
| POST /api/instructor/signup                             | Register a new instructor                                       | Public                                       |
| POST /api/instructor/signin                             | Login an instructor                                             | Public                                       |
| GET /api/instructor/course                              | Get instructors and associated courses                          | authentication, authorize(["admin"])         |
| GET /api/instructor/course/available                    | Get courses not assigned to an instructor                        | Public                                       |
| GET /api/department                                     | Fetch all departments                                           | Public                                       |
| POST /api/department                                    | Create a new department                                         | authentication, authorize(["admin"])         |
| GET /api/department/courses                             | Get departments with associated courses                         | Public                                       |
| GET /api/course                                         | Fetch all courses                                               | Public                                       |
| POST /api/course                                        | Create a new course                                             | authorize(["instructor", "admin"])           |
| GET /api/course/enrolled/:id                             | Get enrolled courses for a specific student                      | authentication, authorize(["student", "admin"]) |
| GET /api/enrollment                                     | Fetch all enrollments                                           | authentication, authorize(["admin"])         |
| GET /api/enrollment/student/course                       | Get all student enrollments with course and enrollment date       | authentication, authorize(["admin"])         |
| POST /api/enrollment                                    | Enroll a student in a course                                    | authentication, authorize(["student"])       |
| GET /api/assignment                                     | Fetch all assignments                                           | authorize(["admin", "instructor"])           |
| POST /api/assignment                                    | Create a new assignment                                         | authorize(["instructor"])                   |
| GET /api/assignment/course                               | Get assignments with associated courses                          | authorize(["admin"])                        |
| GET /api/assignment/course/:id                           | Get assignments for a specific course                             | authentication, authorize(["student", "instructor", "admin"]) |
| GET /api/assignment/student/:id                          | Get assignments and submissions for a specific student             | authentication, authorize(["student", "instructor", "admin"]) |
| DELETE /api/assignment/:id                              | Delete an assignment                                            | authorize(["instructor", "admin"])           |
| PATCH /api/assignment/:id                               | Update an assignment                                            | authorize(["instructor", "admin"])           |
| GET /api/submission                                     | Fetch all submissions                                           | authentication, authorize(["admin"])         |
| POST /api/submission                                    | Submit an assignment                                            | authentication, authorize(["student", "instructor"]) |
| GET /api/submission/student                             | Get student submissions                                         | Public                                       |
| GET /api/submission/course/:id                           | Get submissions for a specific course                              | authentication, authorize(["admin", "instructor"]) |                                  
| GET /api/announcement/department/:id                     | Get announcements for a specific department                       | authentication, authorize(["admin", "instructor", "student"]) |
| GET /api/announcement/course/:id                         | Get announcements for a specific course                           | authentication, authorize(["admin", "instructor", "student"]) |
| GET /api/announcement                                    | Get all announcements                                            | authentication, authorize(["student", "instructor", "admin"]) |
| GET /api/announcement/student/:id                        | Get announcements for courses enrolled by a student                | authentication, authorize(["student", "instructor", "admin"]) |
| GET /api/announcement/:id                                | Get a specific announcement                                      | authentication, authorize(["student", "instructor", "admin"]) |
| POST /api/announcement                                   | Post a new announcement                                          | authentication, authorize(["admin", "instructor"]) |
| POST /api/ai/chat                                       | Post a message for chatbot AI                                     | Public                                           |
| POST /api/ai/assignment                                 | Get assignment information using AI                               | authentication, authorize(["instructor", "admin", "student"]) |

## Endpoints Reference

### Student

- `GET /api/student`: Fetch all students.
- `POST /api/student/signup`: Register a new student.
- `POST /api/student/signin`: Login a student.
- ...

### Instructor

- `GET /api/instructor`: Fetch all instructors.
- `POST /api/instructor/signup`: Register a new instructor.
- `POST /api/instructor/signin`: Login an instructor.
- ...

### Department

- `GET /api/department`: Fetch all departments.
- `POST /api/department`: Create a new department.
- ...

### Course

- `GET /api/course`: Fetch all courses.
- `POST /api/course`: Create a new course.
- ...

### Enrollment

- `GET /api/enrollment`: Fetch all enrollments.
- `POST /api/enrollment`: Enroll a student in a course.
- ...

### Assignment

- `GET /api/assignment`: Fetch all assignments.
- `POST /api/assignment`: Create a new assignment.
- ...

### Submission

- `GET /api/submission`: Fetch all submissions.
- `POST /api/submission`: Submit an assignment.
- ...

### Announcement

- `GET /api/announcement`: Get all announcements.
- `GET /api/announcement/:id`: Get a specific announcement.
- `POST /api/announcement`: Post a new announcement.
- ...

### AI Chat

- `POST /api/ai/chat`: Post a message for chatbot AI.

### AI Assignment

- `POST /api/ai/assignment`: Get assignment information using AI.


# What I've Learned

Throughout the development of EduHub, I've had the opportunity to expand my knowledge and skills significantly. Here are some of the key takeaways:

- **New Technology Stacks**: I explored and implemented new technology stacks, including using generative AI, within just one month. This experience has enriched my proficiency in handling cutting-edge tools and frameworks.

- **Generative AI**: In particular, I delved into Generative AI as part of the GA-201 course. Learning how to leverage AI for various tasks, such as assignment generation and chatbot interactions, has been an enlightening experience.

- **Communication**: Developing the Announcement System taught me the importance of effective communication in ensuring students, instructors, and administrators are informed of essential updates promptly.

- **AI Integration**: Integrating AI features into the project, such as the Generative AI Chatbot and AI Assignment Generator, has opened up exciting possibilities for automating and enhancing user interactions.

- **Continuous Learning**: This project has reinforced the importance of continuous learning in the fast-paced world of technology. Adapting to new tools and technologies is essential for staying competitive and innovative.

I'd also like to mention that I received valuable assistance from an AI model during the process, showcasing the potential of AI in simplifying various aspects of software development.

Thank you for the opportunity to work on EduHub, and I look forward to applying these newfound skills to future projects and endeavors.

*Note: This individual project was developed in just 8 days.*
