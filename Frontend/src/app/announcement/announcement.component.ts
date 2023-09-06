import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  announcements = [
    {
      title: 'Important Announcement 1',
      time: '2 hours ago',
    },
    {
      title: 'Event Reminder',
      time: '1 day ago',
    },
    {
      title: 'Upcoming Workshop',
      time: '3 days ago',
    },
    // Add more announcements as needed
  ];
}
